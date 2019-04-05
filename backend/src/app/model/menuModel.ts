import * as mongoose from "mongoose";
import { IMenu } from "./interface/iMenu";
import { IMenuItem } from "./interface/iMenuItem";
import { MenuRepository } from "../repository/menuRepository";

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

    static create(name: string, children: Array<IMenuItem>): Promise<IMenu> {
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