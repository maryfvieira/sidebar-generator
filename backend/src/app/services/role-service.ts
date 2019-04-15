import * as mongoose from "mongoose";
import { inject, injectable, id } from 'inversify';
import BaseRepositoryInterface from "../dataaccess/repository/base-repo-interface";
import { Typegoose } from "typegoose";
import { ServiceBase } from "./service-base";
import RoleRepositoryBase from "../dataaccess/repository/role-repo-base";
import { Role } from "../../models/role-model";
import TYPES from "../../constants/TYPES";
import { RoleServiceBase } from "./role-service-base";
import { Logger } from "winston";
import { String, StringBuilder } from 'typescript-string-operations';
import { stringify } from "querystring";

@injectable()
export class RoleService extends RoleServiceBase{

    public constructor(@inject(TYPES.RoleRepo) repo: RoleRepositoryBase, @inject(TYPES.Log) logger: Logger) {
        super(repo, logger);
    }
    
    create(role: Role): Promise<void> {
      let p = new Promise<void>((resolve, reject) => {
    
        this.repo.create(role, (err, res) => {
          if (err) {
            this.logger.error(String.Format("Erro ao criar role, descricao do erro: {0}, Role: {1}", (<Error>err).message, JSON.stringify(role)));
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
            this.logger.error( "Erro ao remover role, descricao do erro:" + (<Error>err).message)
            this.logger.error(String.Format("Erro ao remover role, descricao do erro: {0}, idRole: {1}", (<Error>err).message, id));
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
            this.logger.error(String.Format("Erro ao atualizar role, descricao do erro: {0}, Role: {1}", (<Error>err).message, JSON.stringify(role)));
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
            this.logger.error(String.Format("Erro ao retornar role, descricao do erro: {0}, idRole: {1}", (<Error>err).message, id));
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
            this.logger.error("Erro ao retornar todas as role, descricao do erro:" + (<Error>err).message)
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