import * as mongoose from 'mongoose';
import { Menu, IMenu } from '../models/menu';
import { Request, Response } from 'express';
import { IBreadCrumb } from 'models/breadcrumb';


//const Contact = mongoose.model('Contact', ContactSchema);

export class ContactController{
    public addMenu(req: Request, res: Response){
        let newContact = new MenuM(req.body);

        const breadCrumb: IBreadCrumb = {
            icon: string;
            label: string;
            name: string;
        };

        const menu: IMenu = {
            name: '',
            children: 
        };

        Menu.create()

    }
    public getMenu(req: Request, res: Response){

    }
    
}