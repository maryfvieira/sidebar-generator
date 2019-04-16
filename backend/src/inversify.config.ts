import {Container} from "inversify";
import BreadcrumbRepositoryBase from "./app/dataaccess/repository/breadcrumb-repo-base";
import { MenuRepository } from "./app/dataaccess/repository/menu-repo";
import TYPES from "./constants/TYPES"
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
//import { AppConfig } from "config/appConfig";
import { WistomLog } from "utils/log";
import { Logger } from "winston";
import { Configuration } from "./config/config";
import { ConfigModelData } from "config/config-model";

class AppConfig {

    static getConfig(): ConfigModelData {

        let config : ConfigModelData;

        switch(process.env.NODE_ENV){
            case "development" : config = new Configuration.ConfigFactory<Configuration.DevConfig>().create(); break;
            case "production" : config = new Configuration.ConfigFactory<Configuration.ProdConfig>().create(); break;
            case "staging" : config = new Configuration.ConfigFactory<Configuration.StagingConfig>().create(); break;
            case "test" : config = new Configuration.ConfigFactory<Configuration.TestConfig>().create(); break;
            default : config = new Configuration.ConfigFactory<Configuration.DevConfig>().create(); break;
        }

        return config;

    }
}

const myContainer = new Container();

myContainer
    .bind<BreadcrumbRepositoryBase>(TYPES.BreadCrumbRepo)
    .to(BreadcrumbRepository); 

myContainer
    .bind<MenuRepositoryBase>(TYPES.MenuRepo)
    .to(MenuRepository); 

myContainer
    .bind<RoleRepositoryBase>(TYPES.RoleRepo)
    .to(RoleRepository); 

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
    .bind<ConfigModelData>(TYPES.AppConfig)
    .toConstantValue(AppConfig.getConfig())

myContainer
    .bind<Logger>(TYPES.Log)
    .toConstantValue(new WistomLog().log());

    
export default myContainer;


