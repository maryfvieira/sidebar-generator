import * as mongoose from "mongoose";
import { RepositoryBase } from "../repo/repository-base";

const Schema = mongoose.Schema;

export interface IBreadCrumb extends mongoose.Document {
    icon: string;
    label: string;
    name: string;
}

export const schema = new Schema({
    icon: {
        type: String,
        require: true           
    },

    label: {
        type: String,
        require: true           
    },

    name: {
        type: String,
        require: true           
    }
});

export let breadcrumbSchema = mongoose.model<IBreadCrumb>('breadcrumb', schema);
module.exports = breadcrumbSchema;

export class BreadCrumbRepository extends RepositoryBase<IBreadCrumb> {
    constructor() {
      super(breadcrumbSchema);
    }
}

export class breadcrumbModel {

    private _breadcrumb: IBreadCrumb;

    constructor(breadcrumb: IBreadCrumb){
        this._breadcrumb = breadcrumb;
    }

    get name(): string {
        return this._breadcrumb.name;
    }

    get label(): string {
        return this._breadcrumb.label;
    }

    get icon(): string {
        return this._breadcrumb.icon;
    }

    static createBreadcrumb(name: string, label: string, icon: string): Promise<IBreadCrumb> {
        let p = new Promise<IBreadCrumb>((resolve, reject) => {
      
            let repo = new BreadCrumbRepository();
      
            let breadcrumb = <IBreadCrumb>{
                icon: icon,
                label: label,
                name: name
            };
      
            repo.create(breadcrumb, (err, res) => {
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