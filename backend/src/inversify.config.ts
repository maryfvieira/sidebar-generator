import {Container} from "inversify";
import identifier from "./app/identifier";
import IBaseRepository from './app/repository/iBaseRepository';
import RoleRepository from "./app/repository/roleRepository";
import BreadCrumbRepository from "./app/repository/breadCrumbRepository";
import MenuItemRepository from "./app/repository/menuItemRepository";
import MenuSubItemRepository from "./app/repository/menuSubItemRepository";
import MenuRepository from "./app/repository/menuRepository";
import { IMenuModel } from "app/model/interface/iMenuModel";
import { IBreadCrumbModel } from "app/model/interface/iBreadCrumbModel";
import { IMenuItemModel } from "app/model/interface/iMenuItemModel";
import { IMenuSubItemModel } from "app/model/interface/iMenuSubItemModel";
import { IRoleModel } from "app/model/interface/iRoleModel";
import { IBusiness } from "app/business/IBusiness";
import { MenuBusiness } from "app/business/menuBusiness";

const myContainer = new Container();
myContainer
    .bind<IBaseRepository<IMenuModel>>(identifier.MenuRepo)
    .to(MenuRepository);  

myContainer
    .bind<IBaseRepository<IBreadCrumbModel>>(identifier.BreadCrumbRepo)
    .to(BreadCrumbRepository);  

myContainer
    .bind<IBaseRepository<IMenuItemModel>>(identifier.ItemMenuRepo)
    .to(MenuItemRepository);  

myContainer
    .bind<IBaseRepository<IMenuSubItemModel>>(identifier.SubItemMenuRepo)
    .to(MenuSubItemRepository);  

myContainer
    .bind<IBaseRepository<IRoleModel>>(identifier.RoleRepo)
    .to(RoleRepository);  

myContainer
    .bind<IBusiness<IRoleModel, MenuRepository>>(identifier.MenuBusiness)
    .to(MenuBusiness);  