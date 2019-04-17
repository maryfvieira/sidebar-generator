import * as mongoose from "mongoose";
import { inject, injectable } from 'inversify';
import BaseRepositoryInterface from "../dataaccess/repository/base-repo-interface";
import { Typegoose } from "typegoose";
import { Logger } from "winston";
import { ILog } from "../../utils/log";

export interface ServiceBase<T extends Typegoose>{
    repo: BaseRepositoryInterface<T>;

    create(item: T): Promise<void>;
    remove(id: string): Promise<void>;
    update(item: T): Promise<void>;
    get(id: string): Promise<T>;
    getAll(): Promise<T[]>;
}