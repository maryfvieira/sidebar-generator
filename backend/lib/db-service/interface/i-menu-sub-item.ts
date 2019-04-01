import * as mongoose from "mongoose";
import { IRoles } from "./i-roles";
import { IBreadCrumb } from "./i-breadcrumb";

export interface IMenuSubItem extends mongoose.Document {
    _id: string;
    path: string;
    componentName: number;
    name: string;
    roles: [IRoles];
    breadCrumb: IBreadCrumb;
  }