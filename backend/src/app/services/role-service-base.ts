import * as mongoose from "mongoose";
import { inject } from 'inversify';
import BaseRepositoryInterface from "../dataaccess/repository/base-repo-interface";
import { Typegoose } from "typegoose";
import { ServiceBase } from "./service-base";
import RoleRepositoryBase from "../dataaccess/repository/role-repo-base";
import { Role } from "../../models/role-model";

export interface RoleServiceBase extends ServiceBase<Role>{
}