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
import { AppConfig } from "config/appConfig";
import { logger, WistomLog } from "utils/log";
import { Logger } from "winston";

class AppConfigDefinition {

    static getObj(): AppConfig {
        return new AppConfig(AppConfigDefinition.getEnvironmentType())
    }

    static getEnvironmentType(): EnvironmentType {

        let environmentType: EnvironmentType;

        switch(process.env.NODE_ENV){
            case "development" : environmentType = EnvironmentType.Dev; break;
            case "production" : environmentType = EnvironmentType.Prod; break;
            case "stagging" : environmentType = EnvironmentType.Stagging; break;
            case "test" : environmentType = EnvironmentType.Test; break;
            default : environmentType = EnvironmentType.Dev; break;
        }

        return environmentType;

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
    .bind<AppConfig>(TYPES.AppConfig)
    .toConstantValue(AppConfigDefinition.getObj());

myContainer
    .bind<Logger>(TYPES.Log)
    .toConstantValue(new WistomLog().log());

    
export default myContainer;


