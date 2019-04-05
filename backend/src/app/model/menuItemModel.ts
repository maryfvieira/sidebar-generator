import * as mongoose from "mongoose";
import { IMenuItem } from "./interface/iMenuItem";
import { IRole } from "./interface/iRole";
import { IBreadCrumb } from "./interface/iBreadCrumb";
import { IMenuSubItem } from "./interface/iMenuSubItem";
import { MenuItemRepository } from "../repository/menuItemRepository";
const Schema = mongoose.Schema;

export class MenuItem {

    private _menuItem: IMenuItem;

    constructor(menuItem: IMenuItem){
        this._menuItem = menuItem;
    }

    get name(): string {
        return this._menuItem.name;
    }

    get path(): string {
        return this._menuItem.path;
    }

    get componentName(): string {
        return this._menuItem.componentName;
    }

    get roles(): Array<IRole> {
        return this._menuItem.roles;
    }

    get breadCrumb(): IBreadCrumb {
        return this._menuItem.breadCrumb;
    }

    get children(): Array<IMenuSubItem> {
        return this._menuItem.children;
    }

    static create(path: string, componentName: string, name: string, roles: Array<IRole>, breadCrumb: IBreadCrumb, children: Array<IMenuSubItem>): Promise<IMenuItem> {
        let p = new Promise<IMenuItem>((resolve, reject) => {
      
            let repo = new MenuItemRepository();
      
            let menuItem = <IMenuItem> {
                path: path,
                componentName: componentName,
                name: name,
                roles: roles,
                breadCrumb: breadCrumb,
                children: children
            };
      
            repo.create(menuItem, (err, res) => {
              if (err) {
                reject(err);
              }
              else {
                resolve(res);
              }
            });    
        });
        return p;
    }
}

