import * as mongoose from "mongoose";
import { IBreadCrumbModel } from "./iBreadCrumbModel";
import { IRoleModel } from "./iRoleModel";

export interface IMenuSubItemModel extends mongoose.Document {
    _id: string;
    path: string;
    componentName: string;
    name: string;
    roles: [IRoleModel];
    breadCrumb: IBreadCrumbModel;
}
