import { RepositoryBase } from "./repositoryBase";
import { IRole } from "../model/interface/iRole";
import { roleSchema } from "./../dataAccess/schemas/roleSchema";

export class RoleRepository extends RepositoryBase<IRole> {
    constructor() {
      super(roleSchema);
    }
}