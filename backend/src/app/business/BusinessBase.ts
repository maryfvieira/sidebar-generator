import IBaseRepository from './../repository/iBaseRepository';
import * as mongoose from "mongoose";
import { RepositoryBase } from '../repository/repositoryBase';
import { inject } from 'inversify';
import Identifier from "./../identifier";

export abstract class BusinessBase<T extends mongoose.Document, R extends IBaseRepository<T>>{
    _repo: R;

    public constructor(repo: R) {
        this._repo = repo;
    }
}