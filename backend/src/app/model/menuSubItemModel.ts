import * as mongoose from "mongoose";
import { IMenuSubItem } from "./interface/iMenuSubItem";
import { IRole } from "./interface/iRole";
import { IBreadCrumb } from "./interface/iBreadCrumb";
import { MenuSubItemRepository } from "../repository/menuSubItemRepository";
const Schema = mongoose.Schema;

export class MenuSubItemModel {

    private _menuSubItem: IMenuSubItem;

    constructor(menuSubItem: IMenuSubItem){
        this._menuSubItem = menuSubItem;
    }

    get name(): string {
        return this._menuSubItem.name;
    }

    get path(): string {
        return this._menuSubItem.path;
    }

    get componentName(): string {
        return this._menuSubItem.componentName;
    }

    get roles(): Array<IRole> {
        return this._menuSubItem.roles;
    }

    get breadCrumb(): IBreadCrumb {
        return this._menuSubItem.breadCrumb;
    }

    static create(path: string, componentName: string, name: string, roles: [IRole], breadCrumb: IBreadCrumb): Promise<IMenuSubItem> {
        let p = new Promise<IMenuSubItem>((resolve, reject) => {
      
            let repo = new MenuSubItemRepository();
      
            let menuSubItem = <IMenuSubItem> {
                path: path,
                componentName: componentName,
                name: name,
                roles: roles,
                breadCrumb: breadCrumb
            };
      
            repo.create(menuSubItem, (err, res) => {
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
