import { RepositoryBase } from "./repositoryBase";
import { IMenuItemModel } from "../model/interface/iMenuItemModel";
import { menuItemSchema } from "./../dataAccess/schemas/menuItemSchema";
import { injectable } from "inversify";

@injectable()
export default class MenuItemRepository extends RepositoryBase<IMenuItemModel> {
    constructor() {
      super(menuItemSchema);
    }
}