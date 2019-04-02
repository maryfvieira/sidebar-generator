import * as mongoose from "mongoose";
import { IRole, roleSchema, RoleModel } from "./role.model";
import { IBreadCrumb, breadcrumbSchema } from "./breadcrumb.model";
import { RepositoryBase } from "../repo/repository-base";

const Schema = mongoose.Schema;

export interface IMenuSubItem extends mongoose.Document {
    _id: string;
    path: string;
    componentName: string;
    name: string;
    roles: [IRole];
    breadCrumb: IBreadCrumb;
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
    }
});

export let menuSubItemSchema = mongoose.model<IMenuSubItem>('menuSubItem', schema);
module.exports = menuSubItemSchema;

export class MenuSubItemRepository extends RepositoryBase<IMenuSubItem> {
    constructor() {
      super(menuSubItemSchema);
    }
}
export class menuSubItemModel {

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

    static createMenuSubItem(path: string, componentName: string, name: string, roles: [IRole], breadCrumb: IBreadCrumb): Promise<IMenuSubItem> {
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
