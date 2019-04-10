import * as mongoose from "mongoose";
import { IMenuItemModel } from "../interface/iMenuItemModel";
import { IRoleModel } from "./iRoleModel";

export interface IMenuModel extends mongoose.Document {
    name: string;
    roles: [IRoleModel];
    children: [IMenuItemModel];
}

