import * as mongoose from "mongoose";
import { IMenuItem } from "../../model/interface/iMenuItem";
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
    },
    children: [{
         type: Schema.Types.ObjectId,
        ref: 'menuSubItem' 
    }]
});

export let menuItemSchema = mongoose.model<IMenuItem>('menuItem', schema);
module.exports = menuItemSchema;