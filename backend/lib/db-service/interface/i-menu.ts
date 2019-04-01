import * as mongoose from "mongoose";
import { IMenuItem } from "./i-menu-item";

export interface IMenu extends mongoose.Document {
    _id: string;
    title: string;
    children: [IMenuItem];
}