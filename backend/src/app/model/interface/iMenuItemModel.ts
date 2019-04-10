import * as mongoose from "mongoose";

import { IBreadCrumbModel } from "./iBreadCrumbModel";
import { IRoleModel } from "./iRoleModel";
import { IMenuSubItemModel } from "./iMenuSubItemModel";

export interface IMenuItemModel extends mongoose.Document{
  path: string;
  componentName: string;
  name: string;
  roles: [IRoleModel];
  breadCrumb: IBreadCrumbModel;
  children: [IMenuSubItemModel];
}
