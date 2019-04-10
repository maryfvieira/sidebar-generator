import * as mongoose from "mongoose";
import { IMenuModel } from "../../model/interface/iMenuModel";
import { roleSchema } from "./roleSchema";
import { menuSubItemSchema } from "./menuSubItemSchema";

const Schema = mongoose.Schema;

export const schema = new Schema({
    id: Schema.Types.ObjectId,
    name: String,
    roles: [roleSchema],
    children: menuSubItemSchema

    // roles: [{ 
    //     type: Schema.Types.ObjectId,
    //     ref: 'role' 
    // }],
    // children: [{ 
    //     type: Schema.Types.ObjectId,
    //     ref: 'menuItem' 
    // }]
});

export let menuSchema = mongoose.model<IMenuModel>('menu', schema);
module.exports = menuSchema;
