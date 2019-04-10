import { RepositoryBase } from "./repositoryBase";
import { IBreadCrumbModel } from "../model/interface/iBreadCrumbModel";
import { breadcrumbSchema } from "./../dataAccess/schemas/breadCrumbSchema";
import { injectable } from "inversify";

@injectable()
export default class BreadCrumbRepository extends RepositoryBase<IBreadCrumbModel> {
    constructor() {
      super(breadcrumbSchema);
    }
}