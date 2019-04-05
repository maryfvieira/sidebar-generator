import * as express from "express";
import { MenuRoutes } from "./menuRoutes";

var app = express();
export class Routes {
    
    get routes() {
        app.use("/", new MenuRoutes().routes);
        return app;
    }
}
