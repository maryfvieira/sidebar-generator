import * as mongoose from "mongoose";
import { inject } from 'inversify';
import BaseRepositoryInterface from "../dataaccess/repository/base-repo-interface";
import { Typegoose } from "typegoose";
import { ServiceBase } from "./service-base";
import BreadcrumbRepositoryBase from "../dataaccess/repository/breadcrumb-repo-base";
import { Breadcrumb } from "../../models/breadcrumb-model";

export interface BreadcrumbServiceBase extends ServiceBase<Breadcrumb>{

}