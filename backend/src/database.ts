import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/menuRoutes";
import * as mongoose from "mongoose";

export class Database {
     // Connection URL
     private server = 'mongodb://localhost:27017';
 
     // Database Name
     private database = 'Open';
}