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
import { MenuServiceBase } from "../app/services/menu-service-base";
import { Menu } from "../models/menu-model";
import { ApiPath, ApiOperationGet, ApiOperationPost, ApiOperationPut, ApiOperationDelete, SwaggerDefinitionConstant } from "swagger-express-ts";
import { HTTP400Error } from "utils/httpErrors";

@ApiPath({
    path: "/menu",
    name: "Menu",
    security: { basicAuth: [] }
})
@controller("/menu")
@injectable()
export class MenuController extends BaseHttpController{

    private readonly _menuservice: MenuService;

    public constructor(@inject(TYPES.MenuSrv) menuservice: MenuServiceBase){
        super();
        this._menuservice = menuservice;
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
    private create(@request() req: express.Request, @response() res: express.Response, @next() next: express.NextFunction) {
        return this._menuservice.create(req.body)
            .then(() => this.ok())
            .catch((err: Error) => {
                next(new HTTP400Error(err.message));
                //res.status(400).json({error: err.message});
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
    private update(@request() req: express.Request, @response() res: express.Response, @next() next: express.NextFunction) {
        return this._menuservice.update(req.body)
            .then(() => this.ok())
            .catch((err: Error) => {
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
    private delete(@requestParam("id") id: string, @response() res: express.Response, @next() next: express.NextFunction) {
        return this._menuservice.remove(id)
            .then(() => this.ok())
            .catch((err: Error) => {
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
    private getAll(@response() res: express.Response, @next() next: express.NextFunction) {
        return this._menuservice.getAll()
            //.then((menus: Array<Menu>) => res.json({data: menus}))
            .then((menus: Array<Menu>) => this.json(menus, 200))
            .catch((err: Error) => {
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
    private getByRole(@requestParam("role") role: string, @response() res: express.Response, @next() next: express.NextFunction) {
        return this._menuservice.getByRole(role)
            .then((menus: Array<Menu>) => this.json(menus, 200))
            .catch((err: Error) => {
                res.status(400).json({error: err.message});
            });
    }
}