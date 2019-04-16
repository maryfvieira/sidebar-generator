import * as mongoose from "mongoose";
import { inject } from 'inversify';
import BaseRepositoryInterface from "../dataaccess/repository/base-repo-interface";
import { Typegoose } from "typegoose";
import { Logger } from "winston";
import { ILog } from "../../utils/log";

export abstract class ServiceBase<T extends Typegoose, R extends BaseRepositoryInterface<T>>{
    repo: R;

    public constructor(repo: R) {
        this.repo = repo;
    }

    abstract create(item: T): Promise<void>;
    abstract remove(id: string): Promise<void>;
    abstract update(item: T): Promise<void>;
    abstract get(id: string): Promise<T>;
    abstract getAll(): Promise<T[]>;
}