import { IBreadCrumb } from "../model/interface/iBreadCrumb";
import { BreadCrumbRepository } from "../repository/breadCrumbRepository";

export class BreadCrumb {

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

    static create(name: string, label: string, icon: string): Promise<IBreadCrumb> {
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