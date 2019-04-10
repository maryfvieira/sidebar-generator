import { BusinessBase } from "./BusinessBase";
import { IMenuModel } from "./../model/interface/iMenuModel"
import MenuRepository from "./../repository/menuRepository"
import { IMenuItemModel } from "../model/interface/iMenuItemModel";
import MenuItemRepository  from "../repository/menuItemRepository";
import { injectable, inject } from "inversify";
import IBaseRepository from "../repository/iBaseRepository";
import Identifier from "./../identifier";
import { ObjectId } from "bson";
import { Query } from "mongoose";

@injectable()
export class MenuBusiness extends BusinessBase<IMenuModel, MenuRepository>{

    public constructor(@inject(Identifier.MenuRepo) repo: IBaseRepository<IMenuModel>) {
        super(<MenuRepository>repo);
    }
    create(name: string, children: Array<IMenuItemModel>): Promise<IMenuModel> {
        let p = new Promise<IMenuModel>((resolve, reject) => {
      
            let role = <IMenuModel>{
                name: name,
                children: children
            };
      
            this._repo.create(role, (err, res) => {
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
    findByName(name: string) : Promise<IMenuModel>{

        let p = new Promise<IMenuModel>((resolve, reject) => {

            this._repo.findOne({name: name}, (err, res) => {
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

    findByRole(role: string) : Promise<Array<IMenuModel>>{

        var query = new Query();

        let p = new Promise<Array<IMenuModel>>((resolve, reject) => {

            this._repo.find({name: name}, null, {sort: {name : 'asc'}}, (err, res) => {
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

    updateById(id: ObjectId, menumodel: IMenuModel) : Promise<void>{
        let p = new Promise<void>((resolve, reject) => {
            this._repo.update(id, menumodel, (err, res) => {
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

