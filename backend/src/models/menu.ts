import * as mongoose from "mongoose";
import { IMenuItem, menuItemSchema } from "./menuItem";
import { RepositoryBase } from "../repo/repositoryBase";

const Schema = mongoose.Schema;

export interface IMenu extends mongoose.Document {
    name: string;
    children: [IMenuItem];
}

export const schema = new Schema({
    name: String,
    children: [{ 
        type: Schema.Types.ObjectId,
        ref: 'menuItem' 
    }]
});

export let menuSchema = mongoose.model<IMenu>('menu', schema);
module.exports = menuSchema;

export class MenuRepository extends RepositoryBase<IMenu> {
    constructor() {
      super(menuSchema);
    }
}

export class MenuModel {

    private _menu: IMenu;

    constructor(menu: IMenu){
        this._menu = menu;
    }

    get name(): string {
        return this._menu.name;
    }
    get children(): Array<IMenuItem> {
        return this._menu.children;
    }

    static createRole(name: string, children: Array<IMenuItem>): Promise<IMenu> {
        let p = new Promise<IMenu>((resolve, reject) => {
      
            let repo = new MenuRepository();
      
            let role = <IMenu>{
                name: name,
                children: children
            };
      
            repo.create(role, (err, res) => {
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