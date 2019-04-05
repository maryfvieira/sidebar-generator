import { RepositoryBase } from "./repositoryBase";
import { IMenuItem } from "../model/interface/iMenuItem";
import { menuItemSchema } from "./../dataAccess/schemas/menuItemSchema";

export class MenuItemRepository extends RepositoryBase<IMenuItem> {
    constructor() {
      super(menuItemSchema);
    }
}