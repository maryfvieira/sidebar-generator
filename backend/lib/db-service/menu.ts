import * as mongoose from "mongoose";
import { menuSchema } from "models/menu";

const uri: string = "mongodb://127.0.0.1:27017/local";

const Schema = mongoose.Schema;

mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Succesfully Connected!");
  }
});

export interface IMenu extends mongoose.Document {
    //_id: Schema.Types.ObjectId,
    title: string;
  children: [IMenuItem];
}

export interface IMenuItem extends mongoose.Document {
    path: string;
    componentName: number;
    name: string;
    roles: null;
    breadCrumb: null;
    children: null;
  }

const menu = mongoose.model<IMenu>("Menu", menuSchema);
export default menu;