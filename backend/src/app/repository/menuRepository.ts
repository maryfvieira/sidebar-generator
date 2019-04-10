import { RepositoryBase } from "./repositoryBase";
import { IMenuModel } from "../model/interface/iMenuModel";
import { menuSchema } from "./../dataAccess/schemas/menuSchema";
import { injectable } from "inversify";

@injectable()
export default class MenuRepository extends RepositoryBase<IMenuModel> {
    constructor() {
      super(menuSchema);
    }
    
}