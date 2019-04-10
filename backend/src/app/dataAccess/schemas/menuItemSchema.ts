import * as mongoose from "mongoose";
import { IMenuItemModel } from "../../model/interface/iMenuItemModel";
import { roleSchema } from "./roleSchema";
import { breadcrumbSchema } from "./breadCrumbSchema";
import { menuSubItemSchema } from "./menuSubItemSchema";
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
    breadCrumb: breadcrumbSchema,
    children: menuSubItemSchema

    // roles: [{ 
    //     type: Schema.Types.ObjectId,
    //     ref: 'role' 
    // }],
    // breadCrumb: { 
    //     type: Schema.Types.ObjectId,
    //     ref: 'breadCrumb' 
    // },
    // children: [{
    //      type: Schema.Types.ObjectId,
    //     ref: 'menuSubItem' 
    // }]
});

export let menuItemSchema = mongoose.model<IMenuItemModel>('menuItem', schema);
module.exports = menuItemSchema;