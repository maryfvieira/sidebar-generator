import * as mongoose from 'mongoose';
import { Role } from '../../../models/role-model';
import { injectable, inject, named } from 'inversify';
import BreadcrumbRepositoryBase from './breadcrumb-repo-base';
import { Breadcrumb } from '../../../models/breadcrumb-model';
import TYPES from '../../../constants/TYPES';
import { AppConfig } from '../../../config/config-model';
import { IConfig } from './../../../config/config';

@injectable()
export class BreadcrumbRepository extends BreadcrumbRepositoryBase {
    
    constructor(breadcrumb: Breadcrumb, @inject("AppConfig") config: IConfig) {
        super(breadcrumb, config);
    }
}