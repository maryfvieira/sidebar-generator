import * as mongoose from "mongoose";

export interface IRoleModel extends mongoose.Document {
    name: string;
}
