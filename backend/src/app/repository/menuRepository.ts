import { RepositoryBase } from "./repositoryBase";
import { IMenu } from "../model/interface/iMenu";
import { menuSchema } from "./../dataAccess/schemas/menuSchema";

export class MenuRepository extends RepositoryBase<IMenu> {
    constructor() {
      super(menuSchema);
    }
}