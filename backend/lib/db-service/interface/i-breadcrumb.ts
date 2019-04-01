import * as mongoose from "mongoose";

export interface IBreadCrumb extends mongoose.Document {
    _id: string;
    icon: String;
    label: string;
    name: string;
}