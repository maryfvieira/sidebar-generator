import * as mongoose from 'mongoose';
import { Role } from '../../../models/role-model';
import RoleRepositoryBase from './role-repo-base';
import { injectable, inject } from 'inversify';
import TYPES from './../../../constants/TYPES';
import { AppConfig } from './../../../config/config-model';

@injectable()
export class RoleRepository extends RoleRepositoryBase {
    
    constructor(role: Role, @inject(TYPES.AppConfig) config: AppConfig) {
        super(role, config);
    }
}