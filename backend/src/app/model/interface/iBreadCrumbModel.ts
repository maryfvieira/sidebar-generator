import * as mongoose from "mongoose";

export interface IBreadCrumbModel extends mongoose.Document {
    icon: string;
    label: string;
    name: string;
}