import * as mongoose from 'mongoose';
import { Role } from '../../../models/role-model';
import { injectable, inject } from 'inversify';
import BreadcrumbRepositoryBase from './breadcrumb-repo-base';
import { Breadcrumb } from '../../../models/breadcrumb-model';
import TYPES from 'constants/TYPES';
import { AppConfig } from 'config/appConfig';

@injectable()
export class BreadcrumbRepository extends BreadcrumbRepositoryBase {
    
    constructor(breadcrumb: Breadcrumb, @inject(TYPES.AppConfig) config: AppConfig) {
        super(breadcrumb, config);
    }
}