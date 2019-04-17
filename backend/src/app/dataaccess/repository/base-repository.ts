import * as mongoose from 'mongoose';
import { Typegoose } from 'typegoose';
import { inject, injectable } from 'inversify';
import BaseRepositoryInterface from './base-repo-interface';
import TYPES from "./../../../constants/TYPES";
import { ConnectionDBError } from './../../../utils/httpErrors';
import { AppConfig } from './../../../config/config-model';
import { ILog } from 'utils/log';
import { IConfig } from './../../../config/config';

@injectable()
export abstract class BaseRepository<T extends Typegoose> implements BaseRepositoryInterface<T> {

    model: mongoose.Model<mongoose.Document>;
    item: T | undefined;
    config!: IConfig;
    
    constructor(item: Typegoose, config: IConfig) {
      
      this.item = (<T>item);
      const name = this.item.constructor.name.toLowerCase() + 's';
      this.config = config;

      this.model = this.item.getModelForClass<T>(this.item, {
          existingMongoose: mongoose,
          schemaOptions: {collection: name} 
        })
    }

    create(item: T, callback: (error: any, result: T) => void) {
      this.openConnection(this.config.getConfig());  
      this.model.create(item, callback);
      this.closeConnection();
    }
    
    retrieve(callback: (error: any, result: T) => void) {
      this.openConnection(this.config.getConfig()); 
      this.model.find({}, callback);
      this.closeConnection();
    }
  
    update(_id: string, item: T, callback: (error: any, result: any) => void) {
      this.openConnection(this.config.getConfig()); 
      this.model.update({ _id: _id }, item, callback);
      this.closeConnection();
    }
  
    delete(_id: string, callback: (error: any, result: any) => void) {
      this.openConnection(this.config.getConfig()); 
      this.model.remove({ _id: this.toObjectId(_id) }, (err) => callback(err, null));
      this.closeConnection();
    }
  
    findById(_id: string, callback: (error: any, result: T) => void) {
      this.openConnection(this.config.getConfig()); 
      this.model.findById(_id, callback);
      this.closeConnection();
    }
  
    findOne(cond?: Object, callback?: (err: any, res: T) => void) {
      this.openConnection(this.config.getConfig()); 
      this.model.findOne(cond, callback);
      this.closeConnection();
    }
    
    find(cond?: Object, fields?: Object, options?: Object, callback?: (err: any, res: T[]) => void) {
      this.openConnection(this.config.getConfig()); 
      this.model.find(cond, options, callback);
      this.closeConnection();
    }

    findAll(callback?: (err: any, res: T[]) => void){
      this.openConnection(this.config.getConfig()); 
      this.model.find(callback);
      this.closeConnection();
    }
  
    private toObjectId(_id: string): mongoose.Types.ObjectId {
      return mongoose.Types.ObjectId.createFromHexString(_id);
    }

    private openConnection(config: AppConfig): void {
      this.model.db.open(config.databaseUrl, undefined, undefined, undefined, (err: Error) => {
       console.error("DatabaseError, detalhes do erro: " + err)
      });
    }

    private closeConnection() : void{
      this.model.db.close((err: Error) => {
        console.error("DatabaseError, detalhes do erro: " + err)
      });
    }
}