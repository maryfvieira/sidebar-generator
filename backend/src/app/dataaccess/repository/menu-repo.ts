import * as mongoose from 'mongoose';
import { Role } from '../../../models/role-model';
import { injectable, inject } from 'inversify';
import { Menu } from '../../../models/menu-model';
import MenuRepositoryBase from './menu-repo-base';
import TYPES from 'constants/TYPES';
import { AppConfig } from 'config/appConfig';

@injectable()
export class MenuRepository extends MenuRepositoryBase {
    
    constructor(menu: Menu, @inject(TYPES.AppConfig) config: AppConfig) {
        super(menu, config);
    }
}