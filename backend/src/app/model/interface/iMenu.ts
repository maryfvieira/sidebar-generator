import * as mongoose from "mongoose";
import { IMenuItem } from "../interface/iMenuItem";

export interface IMenu extends mongoose.Document {
    name: string;
    children: [IMenuItem];
}

