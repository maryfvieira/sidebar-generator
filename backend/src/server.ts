import 'reflect-metadata';
import {InversifyExpressServer} from "inversify-express-utils";
import container from "./inversify.config";
import * as bodyParser from "body-parser";
import * as swagger from "swagger-express-ts";
import { SwaggerDefinitionConstant } from "swagger-express-ts";
import * as express from "express";

container.applyMiddleware()

const server = new InversifyExpressServer(container);

process.env.NODE_ENV = "development";

server.setConfig( ( app : any ) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use( '/api-docs/swagger' , express.static( 'swagger' ) );
    app.use( '/api-docs/swagger/assets' , express.static( 'node_modules/swagger-ui-dist' ) );
    app.use( swagger.express(
        {
            definition : {
                info : {
                    title : "My api" ,
                    version : "1.0"
                } ,
                externalDocs : {
                    url : "My url"
                }
                // Models can be defined here
            }
        }
    ) );
} );

server.setErrorConfig( ( app : any ) => {
    app.use( ( err : Error , request : express.Request , response : express.Response , next : express.NextFunction ) => {
        console.error( err.stack );
        response.status( 500 ).send( "Something broke!" );
    } );
});

export default server;