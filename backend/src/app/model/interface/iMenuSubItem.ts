import * as mongoose from "mongoose";
import { IBreadCrumb } from "./iBreadCrumb";
import { IRole } from "./iRole";

export interface IMenuSubItem extends mongoose.Document {
    _id: string;
    path: string;
    componentName: string;
    name: string;
    roles: [IRole];
    breadCrumb: IBreadCrumb;
}
