import * as mongoose from "mongoose";
import { IMenuSubItemModel } from "../../model/interface/iMenuSubItemModel";
import { breadcrumbSchema } from "./breadCrumbSchema";
import { roleSchema } from "./roleSchema";
const Schema = mongoose.Schema;

export const schema = new Schema({
    id: Schema.Types.ObjectId,
    path: {
        type: String,
        require: true           
    },
    componentName: {
        type: String,
        require: true           
    },
    name: {
        type: String,
        require: true           
    },
    roles: [roleSchema],
    breadCrumb: breadcrumbSchema

    // roles: [{ 
    //     type: Schema.Types.ObjectId,
    //     ref: 'role' 
    // }],
    // breadCrumb: { 
    //     type: Schema.Types.ObjectId,
    //     ref: 'breadCrumb' 
    // }
});

export let menuSubItemSchema = mongoose.model<IMenuSubItemModel>('menuSubItem', schema);
module.exports = menuSubItemSchema;