import * as mongoose from 'mongoose';
import BaseRepositoryInterface from './base-repo-interface';
import { Typegoose } from 'typegoose';
import { BaseRepository } from './base-repository';
import { Menu } from '../../../models/menu-model';

export default abstract class MenuRepositoryBase extends BaseRepository<Menu>{
    findByRole(role: string, callback?: (err: any, res: Menu[]) => void): mongoose.DocumentQuery<mongoose.Document[], mongoose.Document, {}> {
        return this.model.find({ roles: { $elemMatch: { name: role } } }, callback);
      }
}
