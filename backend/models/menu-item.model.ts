import * as mongoose from "mongoose";
import { IRole, roleSchema } from "./role.model";
import { IBreadCrumb, breadcrumbSchema } from "./breadcrumb.model";
import { IMenuSubItem, menuSubItemSchema } from "./menu-sub-item.model";
import { RepositoryBase } from "../repo/repository-base";

const Schema = mongoose.Schema;

export interface IMenuItem extends mongoose.Document{
  path: string;
  componentName: string;
  name: string;
  roles: [IRole];
  breadCrumb: IBreadCrumb;
  children: [IMenuSubItem];
}

export const schema = new Schema({

    path: {
        type: String,
        require: true           
    },
    componentName: {
        type: String,
        require: true           
    },
    name: {
        type: String,
        require: true           
    },

    roles: [{ 
        type: Schema.Types.ObjectId,
        ref: 'role' 
    }],
    breadCrumb: { 
        type: Schema.Types.ObjectId,
        ref: 'breadCrumb' 
    },
    children: [{
         type: Schema.Types.ObjectId,
        ref: 'menuSubItem' 
    }]
});

export let menuItemSchema = mongoose.model<IMenuItem>('menuItem', schema);
module.exports = menuItemSchema;

export class MenuItemRepository extends RepositoryBase<IMenuItem> {
    constructor() {
      super(menuItemSchema);
    }
}
export class menuItemModel {

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

    static createMenuSubItem(path: string, componentName: string, name: string, roles: Array<IRole>, breadCrumb: IBreadCrumb, children: Array<IMenuSubItem>): Promise<IMenuItem> {
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

