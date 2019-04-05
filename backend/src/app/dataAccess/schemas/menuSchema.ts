import * as mongoose from "mongoose";
import { IMenu } from "../../model/interface/iMenu";

const Schema = mongoose.Schema;

export const schema = new Schema({
    name: String,
    children: [{ 
        type: Schema.Types.ObjectId,
        ref: 'menuItem' 
    }]
});

export let menuSchema = mongoose.model<IMenu>('menu', schema);
module.exports = menuSchema;
