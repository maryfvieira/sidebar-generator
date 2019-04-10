import * as mongoose from "mongoose";
import { IRoleModel } from "../../model/interface/iRoleModel";

const Schema = mongoose.Schema;

export const schema = new Schema({
    id: Schema.Types.ObjectId,
    name: {
        type: String,
        require: true           
    }
});

export let roleSchema = mongoose.model<IRoleModel>('role', schema);
module.exports = roleSchema;
