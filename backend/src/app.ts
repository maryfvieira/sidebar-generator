import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/menuRoutes";
import * as mongoose from "mongoose";

class App {

    public app: express.Application = express();
    
    public routePrv: Routes = new Routes();

    // Connection URL
    private server = 'mongodb://localhost:27017';
 
    // Database Name
    private database = 'Open';
    //public mongoUrl: string = 'mongodb://dalenguyen:123123@localhost:27017/CRMdb';

    constructor() {
        this.config();
        this.mongoSetup();
        this.routePrv.routes(this.app); 
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files 
        this.app.use(express.static('public'));
    }

    private mongoSetup(): void{
        require('mongoose').Promise = global.Promise;
        //mongoose.Promise = global.Promise;
        mongoose.connect(`mongodb://${this.server}/${this.database}`, {useNewUrlParser: true});        
    }

}

export default new App().app;