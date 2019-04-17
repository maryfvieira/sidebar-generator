import {Container} from "inversify";
import { Logger } from "winston";
import BreadcrumbRepositoryBase from "./app/dataaccess/repository/breadcrumb-repo-base";
import { MenuRepository } from "./app/dataaccess/repository/menu-repo";
import TYPES from "./constants/TYPES";
import { BreadcrumbRepository } from "./app/dataaccess/repository/breadcrumb-repo";
import MenuRepositoryBase from "./app/dataaccess/repository/menu-repo-base";
import RoleRepositoryBase from "./app/dataaccess/repository/role-repo-base";
import { RoleRepository } from "./app/dataaccess/repository/role-repo";
import { BreadcrumbServiceBase } from "./app/services/breadcrumb-service-base";
import { BreadcrumbService } from "./app/services/breadcrumb-service";
import { RoleServiceBase } from "./app/services/role-service-base";
import { RoleService } from "./app/services/role-service";
import { MenuServiceBase } from "./app/services/menu-service-base";
import { MenuService } from "./app/services/menu-service";
import { WistomLog, ILog } from "./utils/log";
import { AppConfig } from "./config/config-model";
import "./controllers/menu-controller";
import { ConfigFactory, ProdConfig, DevConfig, StagingConfig, TestConfig, IConfig } from "./config/config";
import { Menu } from "./models/menu-model";
import BaseRepositoryInterface from "./app/dataaccess/repository/base-repo-interface";
import { Breadcrumb } from "models/breadcrumb-model";
import { Role } from "models/role-model";

const myContainer = new Container();

myContainer
    .bind<BaseRepositoryInterface<Breadcrumb>>(TYPES.BreadCrumbRepo)
    .to(BreadcrumbRepository); 

myContainer
    .bind<BaseRepositoryInterface<Role>>(TYPES.RoleRepo)
    .to(RoleRepository); 

myContainer
    .bind<BaseRepositoryInterface<Menu>>(TYPES.MenuRepo)
    .to(MenuRepository); 


myContainer
    .bind<BreadcrumbServiceBase>(TYPES.BreadCrumbSrv)
    .to(BreadcrumbService); 

myContainer
    .bind<RoleServiceBase>(TYPES.RoleSrv)
    .to(RoleService); 

myContainer
    .bind<MenuServiceBase>(TYPES.MenuSrv)
    .to(MenuService); 

    
myContainer
    .bind<ILog>(TYPES.Log)
    .to(WistomLog).inSingletonScope();


// myContainer
//     .bind<AppConfig>(TYPES.AppConfig)
    
//     .toConstantValue(ConfigFactory.getConfig());

//const appConfig = new DevConfig().getConfig();

myContainer.bind<IConfig>("AppConfig")
.to(DevConfig).inSingletonScope();


export default myContainer;


