import * as mongoose from 'mongoose';
import { AppConfig } from 'config/appConfig';
import { inject } from 'inversify';
import Identifier from "./../identifier";
    
export class DataAccess {
    private static _mongooseInstance: any;
    private  _mongooseConnection: mongoose.Connection;
    private readonly _appConfig: AppConfig;
    
    constructor (@inject(Identifier.MenuRepo) appConfig: AppConfig,
                 @inject(Identifier.MongooseConnection) mongooseConnection: mongoose.Connection) {
        
        this._appConfig = appConfig;
        _mongooseConnection = mongooseConnection;

        this.connect();
    }
    
     connect(): mongoose.Connection {
        if(this._mongooseInstance) 
            return this._mongooseInstance;
        
        this._mongooseConnection.once("open", () => {
            console.log("Conectado ao mongodb.");
        });
        
        this._mongooseInstance = mongoose.connect(this._appConfig.getModel().getDatabaseUrl);
        return this._mongooseInstance;
    }

    getConnection(): mongoose.Connection{
        return this._mongooseConnection;

    }

    getInstance(): Promise<typeof mongoose>{
        return this._mongooseInstance;

    }
    
}
