import * as mongoose from 'mongoose';
import { Role } from '../../../models/role-model';
import RoleRepositoryBase from './role-repo-base';
import { injectable, inject, named } from 'inversify';
import TYPES from './../../../constants/TYPES';
import { AppConfig } from './../../../config/config-model';
import { IConfig } from './../../../config/config';

@injectable()
export class RoleRepository extends RoleRepositoryBase {
    
    constructor(role: Role, @inject("AppConfig") config: IConfig) {
        super(role, config);
    }
}