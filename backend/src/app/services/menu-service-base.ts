import * as mongoose from "mongoose";
import { inject, injectable } from 'inversify';
import BaseRepositoryInterface from "../dataaccess/repository/base-repo-interface";
import { Typegoose } from "typegoose";
import { ServiceBase } from "./service-base";
import { Menu } from "../../models/menu-model";
import MenuRepositoryBase from "../dataaccess/repository/menu-repo-base";

export interface MenuServiceBase extends ServiceBase<Menu>{
    getByRole(role:String): Promise<Menu[]>;
}