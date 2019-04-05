import { RepositoryBase } from "./repositoryBase";
import { IMenuSubItem } from "../model/interface/iMenuSubItem";
import { menuSubItemSchema } from "./../dataAccess/schemas/menuSubItemSchema";

export class MenuSubItemRepository extends RepositoryBase<IMenuSubItem> {
    constructor() {
      super(menuSubItemSchema);
    }
}