import * as mongoose from 'mongoose';
import BaseRepositoryInterface from './base-repo-interface';
import { Typegoose } from 'typegoose';
import { BaseRepository } from './base-repository';
import { Role } from '../../../models/role-model';
import { injectable } from 'inversify';

@injectable()
export default abstract class RoleRepositoryBase extends BaseRepository<Role>{
}
