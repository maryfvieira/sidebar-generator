import { RepositoryBase } from "./repositoryBase";
import { IMenuSubItemModel } from "../model/interface/iMenuSubItemModel";
import { menuSubItemSchema } from "./../dataAccess/schemas/menuSubItemSchema";
import { injectable } from "inversify";

@injectable()
export default class MenuSubItemRepository extends RepositoryBase<IMenuSubItemModel> {
    constructor() {
      super(menuSubItemSchema);
    }
}