import * as mongoose from "mongoose";
import { IBreadCrumb } from "../../model/interface/iBreadCrumb";

const Schema = mongoose.Schema;

export const schema = new Schema({
    icon: {
        type: String,
        require: true           
    },

    label: {
        type: String,
        require: true           
    },

    name: {
        type: String,
        require: true           
    }
});

export let breadcrumbSchema = mongoose.model<IBreadCrumb>('breadcrumb', schema);
module.exports = breadcrumbSchema;