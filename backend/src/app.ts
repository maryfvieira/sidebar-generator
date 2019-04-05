import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/menuRoutes";
import * as mongoose from "mongoose";
import * as appConfig from "./config/appConfig";
import bluebird from "bluebird"; 
const envType: EnvironmentType = EnvironmentType.Dev; 

class App {

    private appConfig = new appConfig.AppConfig(envType);
    public app: express.Application = express();

    public routePrv: Routes = new Routes();

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
        
        // Connect to MongoDB
        const mongoUrl = this.appConfig.getModel().getDatabaseUrl;
        (<any>mongoose).Promise = bluebird;
        mongoose.connect(mongoUrl, {useMongoClient: true})
        .then(() => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
        ).catch(err => {
        console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
            process.exit();
        });

        //require('mongoose').Promise = global.Promise;
        //mongoose.Promise = global.Promise;
        //mongoose.connect(`mongodb://${this.appConfig.getModel().getDatabaseUrl}`, {useNewUrlParser: true});        
    }
}

export default new App().app;