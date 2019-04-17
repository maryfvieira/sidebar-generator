import * as mongoose from "mongoose";
import { inject, injectable } from 'inversify';
import BaseRepositoryInterface from "../dataaccess/repository/base-repo-interface";
import { Typegoose } from "typegoose";
import { ServiceBase } from "./service-base";
import BreadcrumbRepositoryBase from "../dataaccess/repository/breadcrumb-repo-base";
import { Breadcrumb } from "../../models/breadcrumb-model";
import { MenuServiceBase } from "./menu-service-base";
import TYPES from "../../constants/TYPES";
import MenuRepositoryBase from "../dataaccess/repository/menu-repo-base";
import { Menu } from "../../models/menu-model";

@injectable()
export class MenuService implements MenuServiceBase {

  repo!: MenuRepositoryBase;
  
  public constructor(@inject(TYPES.MenuRepo) repo: BaseRepositoryInterface<Menu>) {
    this.repo = <MenuRepositoryBase>repo;
  }
  getByRole(role: string): Promise<Menu[]> {
    let p = new Promise<Menu[]>((resolve, reject) => {
    
      this.repo.findByRole(role, (err, res) => {
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
  create(item: Menu): Promise<void> {
    let p = new Promise<void>((resolve, reject) => {

      this.repo.create(item, (err, res) => {
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
  update(item: Menu): Promise<void> {
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
  get(id: string): Promise<Menu> {
    let p = new Promise<Menu>((resolve, reject) => {

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
  getAll(): Promise<Menu[]> {
    let p = new Promise<Menu[]>((resolve, reject) => {

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