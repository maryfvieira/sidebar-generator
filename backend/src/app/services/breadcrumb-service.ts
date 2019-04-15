import * as mongoose from "mongoose";
import { inject, injectable } from 'inversify';
import BaseRepositoryInterface from "../dataaccess/repository/base-repo-interface";
import { Typegoose } from "typegoose";
import { ServiceBase } from "./service-base";
import TYPES from "../../constants/TYPES";
import { Breadcrumb } from "../../models/breadcrumb-model";
import BreadcrumbRepositoryBase from "../dataaccess/repository/breadcrumb-repo-base";
import { BreadcrumbServiceBase } from "./breadcrumb-service-base";
import { Logger } from "winston";

@injectable()
export class BreadcrumbService extends BreadcrumbServiceBase{

  public constructor(@inject(TYPES.BreadCrumbRepo) repo: BreadcrumbRepositoryBase, @inject(TYPES.Log) logger: Logger) {
    super(repo, logger);
  }

    create(item: Breadcrumb): Promise<void> {
        let p = new Promise<void>((resolve, reject) => {
      
            this.repo.create(item, (err, res) => {
              if (err) {
                this.logger.error(err)
                reject(err);
              }
              else {
                resolve();
              }
            });    
        });

        return p;
    }
    remove(id: string): Promise<void> {
        let p = new Promise<void>((resolve, reject) => {
      
            this.repo.delete(id, (err, res) => {
              if (err) {
                reject(err);
              }
              else {
                resolve();
              }
            });    
        });

        return p;
    }
    update(item: Breadcrumb): Promise<void> {
        let p = new Promise<void>((resolve, reject) => {
      
            this.repo.update(item.id, item, (err, res) => {
              if (err) {
                reject(err);
              }
              else {
                resolve();
              }
            });    
        });

        return p;
    }
    get(id: string): Promise<Breadcrumb> {
        let p = new Promise<Breadcrumb>((resolve, reject) => {
      
            this.repo.findById(id, (err, res) => {
              if (err) {
                reject(err);
              }
              else {
                resolve();
              }
            });    
        });

        return p;
    }
    getAll(): Promise<Breadcrumb[]> {
        let p = new Promise<Breadcrumb[]>((resolve, reject) => {
      
            this.repo.findAll((err, res) => {
              if (err) {
                reject(err);
              }
              else {
                resolve(res);
              }
            });    
        });

        return p;
    }
}