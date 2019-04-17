import * as mongoose from 'mongoose';
import { Role } from '../../../models/role-model';
import { injectable, inject, named } from 'inversify';
import { Menu } from '../../../models/menu-model';
import MenuRepositoryBase from './menu-repo-base';
//import TYPES from './../../../constants/TYPES';
import { AppConfig } from './../../../config/config-model';
import { IConfig } from './../../../config/config';

@injectable()
export class MenuRepository extends MenuRepositoryBase {
    
    constructor(menu: Menu, @inject("AppConfig") config: IConfig) {
        super(menu, config);
    }
}