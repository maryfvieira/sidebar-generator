import * as express from "express";
import * as lodash from "lodash";
import * as fs from 'fs';
import * as data from 'config.json';
import * as configFile from './config.json';
import { ConfigModel } from "./configModel";

export class Config {
    private static instance: Config;

    private model: ConfigModel;
    private envType: EnvironmentType;

    constructor(envType: EnvironmentType){

        if (Config.instance) {
            return Config.instance;
        }else{
            Config.instance = this;
            const configObj = (<any>configFile);
            this.envType = envType;
            this.setConfig(configObj);
        }
    }
    private setConfig(configFile: any){

        for(let i = 0; i < configFile.length; i++){
            const type: EnvironmentType = (<any>EnvironmentType)[configFile[i].name];
            if(type == this.envType){
                this.model = new ConfigModel(type,
                        configFile[i].app_name,
                        configFile[i].app_desc,
                        configFile[i].node_port,
                        configFile[i].json_indentation,
                        configFile[i].databaseUrl,
                        configFile[i].dist);

                        return;
                };
            }
        }
        public getModel(): ConfigModel{
            return this.model;
        }
    }