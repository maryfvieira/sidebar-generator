import { RepositoryBase } from "./repositoryBase";
import { IBreadCrumb } from "../model/interface/iBreadCrumb";
import { breadcrumbSchema } from "./../dataAccess/schemas/breadCrumbSchema";

export class BreadCrumbRepository extends RepositoryBase<IBreadCrumb> {
    constructor() {
      super(breadcrumbSchema);
    }
}