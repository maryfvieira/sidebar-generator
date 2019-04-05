import * as mongoose from "mongoose";

export interface IBreadCrumb extends mongoose.Document {
    icon: string;
    label: string;
    name: string;
}