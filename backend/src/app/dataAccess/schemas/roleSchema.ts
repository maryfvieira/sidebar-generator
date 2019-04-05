import * as mongoose from "mongoose";
import { IRole } from "../../model/interface/iRole";

const Schema = mongoose.Schema;

export const schema = new Schema({
    name: {
        type: String,
        require: true           
    }
});

export let roleSchema = mongoose.model<IRole>('role', schema);
module.exports = roleSchema;
