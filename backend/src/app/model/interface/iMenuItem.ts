import * as mongoose from "mongoose";

import { IBreadCrumb } from "./iBreadCrumb";
import { IRole } from "./iRole";
import { IMenuSubItem } from "./iMenuSubItem";

export interface IMenuItem extends mongoose.Document{
  path: string;
  componentName: string;
  name: string;
  roles: [IRole];
  breadCrumb: IBreadCrumb;
  children: [IMenuSubItem];
}
