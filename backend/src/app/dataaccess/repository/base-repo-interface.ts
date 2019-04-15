import * as mongoose from 'mongoose';
import { Typegoose } from 'typegoose';

export default interface BaseRepositoryInterface<T extends Typegoose>{
    create: (item: T, callback: (error: any, result: any) => void) => void;
    update: (_id: string, item: T, callback: (error: any, result: any) => void) => void;
    delete: (_id: string, callback: (error: any, result: any) => void) => void;
    retrieve: (callback: (error: any, result: any) => void) => void;
    findById: (id: string, callback: (error: any, result: T) => void) => void;
    findOne(cond?: Object, callback?: (err: any, res: T) => void) : void
    findAll(callback?: (err: any, res: T[]) => void): void;
    find(cond: Object, fields: Object, options: Object, callback?: (err: any, res: T[]) => void): void;

}