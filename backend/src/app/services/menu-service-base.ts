import * as mongoose from "mongoose";
import { inject } from 'inversify';
import BaseRepositoryInterface from "../dataaccess/repository/base-repo-interface";
import { Typegoose } from "typegoose";
import { ServiceBase } from "./service-base";
import { Menu } from "../../models/menu-model";
import MenuRepositoryBase from "../dataaccess/repository/menu-repo-base";

export abstract class MenuServiceBase extends ServiceBase<Menu, MenuRepositoryBase>{
    abstract getByRole(role:String): Promise<Menu[]>;
}