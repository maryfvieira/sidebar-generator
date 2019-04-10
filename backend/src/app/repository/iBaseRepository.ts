import * as mongoose from 'mongoose';

export default interface IBaseRepository<T extends mongoose.Document>{
    create: (item: T, callback: (error: any, result: any) => void) => void;
    update: (_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) => void;
    delete: (_id: string, callback: (error: any, result: any) => void) => void;
    retrieve: (callback: (error: any, result: any) => void) => void;
    findById: (id: string, callback: (error: any, result: T) => void) => void;
    findOne(cond?: Object, callback?: (err: any, res: T) => void): mongoose.DocumentQuery<mongoose.Document, mongoose.Document, {}>;
    find(cond: Object, fields: Object, options: Object, callback?: (err: any, res: T[]) => void): mongoose.DocumentQuery<mongoose.Document[], mongoose.Document, {}>;
  
}