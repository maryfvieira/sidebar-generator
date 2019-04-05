import * as mongoose from "mongoose";
import { IRole } from "./interface/iRole";
import { RoleRepository } from "../repository/roleRepository";

export class RoleModel {

    private _role: IRole;

    constructor(role: IRole){
        this._role = role;
    }

    get name(): string {
        return this._role.name;
    }

    static create(name: string): Promise<IRole> {
        let p = new Promise<IRole>((resolve, reject) => {
      
            let repo = new RoleRepository();
      
            let role = <IRole>{
                name: name
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