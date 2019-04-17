import * as mongoose from "mongoose";
import { inject, injectable, id } from 'inversify';
import BaseRepositoryInterface from "../dataaccess/repository/base-repo-interface";
import { Typegoose } from "typegoose";
import { ServiceBase } from "./service-base";
import RoleRepositoryBase from "../dataaccess/repository/role-repo-base";
import { Role } from "../../models/role-model";
import TYPES from "../../constants/TYPES";
import { RoleServiceBase } from "./role-service-base";
import { String, StringBuilder } from 'typescript-string-operations';
import { stringify } from "querystring";

@injectable()
export class RoleService implements RoleServiceBase{

  repo: RoleRepositoryBase;

    public constructor(@inject(TYPES.RoleRepo) repo: BaseRepositoryInterface<Role>) {
        this.repo = <RoleRepositoryBase>repo;
    }
    
    create(role: Role): Promise<void> {
      let p = new Promise<void>((resolve, reject) => {
    
        this.repo.create(role, (err, res) => {
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
    update(role: Role): Promise<void> {
      let p = new Promise<void>((resolve, reject) => {
    
        this.repo.update(role.id, role, (err, res) => {
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

    get(id: string): Promise<Role> {
      let p = new Promise<Role>((resolve, reject) => {
    
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
    
    getAll(): Promise<Role[]> {
      let p = new Promise<Role[]>((resolve, reject) => {
    
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