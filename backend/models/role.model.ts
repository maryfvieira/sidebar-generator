import * as mongoose from "mongoose";
import { RepositoryBase } from "../repo/repository-base";

const Schema = mongoose.Schema;

export interface IRole extends mongoose.Document {
    name: string;
}

export const schema = new Schema({
    name: {
        type: String,
        require: true           
    }
});

export let roleSchema = mongoose.model<IRole>('role', schema);
module.exports = roleSchema;

export class RoleRepository extends RepositoryBase<IRole> {
    constructor() {
      super(roleSchema);
    }
}

export class RoleModel {

    private _role: IRole;

    constructor(role: IRole){
        this._role = role;
    }

    get name(): string {
        return this._role.name;
    }

    static createRole(name: string): Promise<IRole> {
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