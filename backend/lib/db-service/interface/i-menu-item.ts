import * as mongoose from "mongoose";
import { IRoles } from "./i-roles";
import { IBreadCrumb } from "./i-breadcrumb";
import { IMenuSubItem } from "./i-menu-sub-item";

export interface IMenuItem extends mongoose.Document {
    _id: string;
    path: string;
    componentName: number;
    name: string;
    roles: [IRoles];
    breadCrumb: IBreadCrumb;
    children: [IMenuSubItem];
  }