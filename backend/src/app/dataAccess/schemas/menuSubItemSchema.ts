import * as mongoose from "mongoose";
import { IMenuSubItem } from "../../model/interface/iMenuSubItem";
const Schema = mongoose.Schema;

export const schema = new Schema({
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
    roles: [{ 
        type: Schema.Types.ObjectId,
        ref: 'role' 
    }],
    breadCrumb: { 
        type: Schema.Types.ObjectId,
        ref: 'breadCrumb' 
    }
});

export let menuSubItemSchema = mongoose.model<IMenuSubItem>('menuSubItem', schema);
module.exports = menuSubItemSchema;