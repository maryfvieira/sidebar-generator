import { IMenu } from "./interface/i-menu";
import { RepositoryBase } from "./RepositoryBase";
import { menuSchema } from "./schema/menu-schema";

export class MenuRepository extends RepositoryBase<IMenu> {
    constructor() {
      super(menuSchema);
    }
  }