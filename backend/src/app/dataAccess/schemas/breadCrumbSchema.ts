import * as mongoose from "mongoose";
import { IBreadCrumbModel } from "../../model/interface/iBreadCrumbModel";

const Schema = mongoose.Schema;

export const schema = new Schema({
    id: Schema.Types.ObjectId,

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

export let breadcrumbSchema = mongoose.model<IBreadCrumbModel>('breadcrumb', schema);
module.exports = breadcrumbSchema;