import * as express from "express";
import {
    interfaces,
    controller,
    httpGet,
    httpPost,
    httpDelete,
    request,
    queryParam,
    next,
    response,
    requestParam,
    TYPE,
    httpPut,
    BaseHttpController
} from "inversify-express-utils";
import {inject, injectable} from "inversify";
import { MenuService } from "../app/services/menu-service";
import TYPES from "../constants/TYPES";
import { MenuServiceBase } from "./../app/services/menu-service-base";
import { Menu } from "./../models/menu-model";
import { ApiPath, ApiOperationGet, ApiOperationPost, ApiOperationPut, ApiOperationDelete, SwaggerDefinitionConstant } from "swagger-express-ts";
import { HTTP400Error } from "./../utils/httpErrors";
import { ILog } from "./../utils/log";
import { String, StringBuilder } from 'typescript-string-operations';
import { stringify } from "querystring";

@ApiPath({
    path: "/menu",
    name: "Menu",
    security: { basicAuth: [] }
})
@controller("/menu")
export class MenuController extends BaseHttpController{

    private readonly menuservice: MenuService;
    private readonly logger: ILog;

    public constructor(@inject(TYPES.MenuSrv) menuservice: MenuServiceBase, @inject(TYPES.Log) logger: ILog){
        super();
        this.menuservice = <MenuService>menuservice;
        this.logger = logger;
    }
    @ApiOperationPost({
        description: "create menu object",
        summary: "Post new menu",
        parameters: {
            body: { description: "New menu", required: true, model: "Menu" }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Error" }
        }
    })
    @httpPost("/create")
    public create(@request() req: express.Request, @response() res: express.Response, @next() next: express.NextFunction) {
        return this.menuservice.create(req.body)
            .then(() => this.ok())
            .catch((err: Error) => {
                next(new HTTP400Error(String.Format("Erro ao cadastrar menu, descricao do erro: {0}, id: {1}", (<Error>err).message, JSON.stringify(req.body)), this.logger));
                res.status(400).json({error: err.message});
            });
    }
    @ApiOperationPut({
        description: "update menu object",
        summary: "Post updated menu",
        parameters: {
            body: { description: "change Menu", required: true, model: "Menu" }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Error" }
        }
    })
    @httpPut("/update")
    public update(@request() req: express.Request, @response() res: express.Response, @next() next: express.NextFunction) {
        return this.menuservice.update(req.body)
            .then(() => this.ok())
            .catch((err: Error) => {
                next(new HTTP400Error(String.Format("Erro ao atualizar menu, descricao do erro: {0}, id: {1}", (<Error>err).message, JSON.stringify(req.body)), this.logger));
                res.status(400).json({error: err.message});
            });
    }

    @ApiOperationDelete({
        description: "delete menu object",
        summary: "delete menu",
        parameters: {
            path: {id: {name :"id from menu", type: "string"}}
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Error" }
        }
    })
    
    @httpDelete("/delete/:id")
    public delete(@requestParam("id") id: string, @response() res: express.Response, @next() next: express.NextFunction) {
        return this.menuservice.remove(id)
            .then(() => this.ok())
            .catch((err: Error) => {
                next(new HTTP400Error(String.Format("Erro ao deletar menu, descricao do erro: {0}, id: {1}", (<Error>err).message, id), this.logger));
                res.status(400).json({error: err.message});
            });
    }

    @ApiOperationGet({
        description: "Get all menuss",
        summary: "Get all menuss",
        responses: {
            200: { description: "Success", type: SwaggerDefinitionConstant.Response.Type.ARRAY, model: "Menu" }
        }
    })

    @httpGet("/")
    public getAll(@response() res: express.Response, @next() next: express.NextFunction) {
        return this.menuservice.getAll()
            //.then((menus: Array<Menu>) => res.json({data: menus}))
            .then((menus: Array<Menu>) => this.json(menus, 200))
            .catch((err: Error) => {
                next(new HTTP400Error(String.Format("Erro ao retornar menus, descricao do erro: {0}", (<Error>err).message), this.logger));
                res.status(400).json({error: err.message});
            });
    }

    @ApiOperationGet({
        description: "Get menus by role",
        summary: "Get menus by role",
        parameters: {
            path: {role: {name : "role", type: "string"}}
        },
        responses: {
            200: { description: "Success", type: SwaggerDefinitionConstant.Response.Type.ARRAY, model: "Menu" }
        }
    })
    @httpGet("/:role")
    public getByRole(@requestParam("role") role: string, @response() res: express.Response, @next() next: express.NextFunction) {
        return this.menuservice.getByRole(role)
            .then((menus: Array<Menu>) => this.json(menus, 200))
            .catch((err: Error) => {
                next(new HTTP400Error(String.Format("Erro ao retornar por role, descricao do erro: {0}, Role: {1}", (<Error>err).message, role), this.logger));
                res.status(400).json({error: err.message});
            });
    }
}