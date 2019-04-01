import * as mongoose from "mongoose";

export interface IRoles extends mongoose.Document {
    _id: string;
    name: string;
 
}