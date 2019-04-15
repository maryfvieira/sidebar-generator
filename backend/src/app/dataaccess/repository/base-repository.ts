import * as mongoose from 'mongoose';
import { Typegoose } from 'typegoose';
import BaseRepositoryInterface from './base-repo-interface';
import InstanceLoader from './../../InstanceLoader';
import TYPES from "./../../../constants/TYPES"
import { AppConfig } from 'config/appConfig';
import { inject } from 'inversify';
import { ConnectionDBError } from 'utils/httpErrors';

export abstract class BaseRepository<T extends Typegoose> implements BaseRepositoryInterface<T> {

    model: mongoose.Model<mongoose.Document>;
    item: T | undefined;
    config!: AppConfig;
    
    constructor(item: Typegoose, config: AppConfig) {
      
      this.item = (<T>item);
      const name = this.item.constructor.name.toLowerCase() + 's';
      this.config = config;

      this.model = this.item.getModelForClass<T>(this.item, {
          existingMongoose: mongoose,
          schemaOptions: {collection: name} 
        })
    }

    create(item: T, callback: (error: any, result: T) => void) {
      this.openConnection(this.config);  
      this.model.create(item, callback);
      this.closeConnection();
    }
    
    retrieve(callback: (error: any, result: T) => void) {
      this.openConnection(this.config); 
      this.model.find({}, callback);
      this.closeConnection();
    }
  
    update(_id: string, item: T, callback: (error: any, result: any) => void) {
      this.openConnection(this.config); 
      this.model.update({ _id: _id }, item, callback);
      this.closeConnection();
    }
  
    delete(_id: string, callback: (error: any, result: any) => void) {
      this.openConnection(this.config); 
      this.model.remove({ _id: this.toObjectId(_id) }, (err) => callback(err, null));
      this.closeConnection();
    }
  
    findById(_id: string, callback: (error: any, result: T) => void) {
      this.openConnection(this.config); 
      this.model.findById(_id, callback);
      this.closeConnection();
    }
  
    findOne(cond?: Object, callback?: (err: any, res: T) => void) {
      this.openConnection(this.config); 
      this.model.findOne(cond, callback);
      this.closeConnection();
    }
    
    find(cond?: Object, fields?: Object, options?: Object, callback?: (err: any, res: T[]) => void) {
      this.openConnection(this.config); 
      this.model.find(cond, options, callback);
      this.closeConnection();
    }

    findAll(callback?: (err: any, res: T[]) => void){
      this.openConnection(this.config); 
      this.model.find(callback);
      this.closeConnection();
    }
  
    private toObjectId(_id: string): mongoose.Types.ObjectId {
      return mongoose.Types.ObjectId.createFromHexString(_id);
    }

    private openConnection(config: AppConfig): void {
      this.model.db.open(config.getModel().getDatabaseUrl, undefined, undefined, undefined, (err: Error) => {
        new ConnectionDBError(err);
      });
    }

    private closeConnection() : void{
      this.model.db.close((err: Error) => {
        new ConnectionDBError(err);
      });
    }
}