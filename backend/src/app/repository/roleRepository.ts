import { RepositoryBase } from "./repositoryBase";
import { IRoleModel } from "../model/interface/iRoleModel";
import { roleSchema } from "./../dataAccess/schemas/roleSchema";
import { injectable } from "inversify";

@injectable()
export default class RoleRepository extends RepositoryBase<IRoleModel> {
    constructor() {
      super(roleSchema);
    }
}