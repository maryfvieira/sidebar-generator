import {Request, Response} from "express";

export class Routes {       
    public routes(app): void {   
            
        // get all menus 
        app.route('/menus') 
        // GET endpoint 
        .get((req: Request, res: Response) => {
        // Get all menus            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        });

        app.route('/menu')         
        // POST endpoint
        .post((req: Request, res: Response) => {   
        // Create new menu         
            res.status(200).send({
                message: 'POST request successfulll!!!!'
            })
        });

        // menu by name
        app.route('/menus/:name')
        // get specific contact
        .get((req: Request, res: Response) => {
        // Get a single menu             
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        .put((req: Request, res: Response) => {
        // Update a menu           
            res.status(200).send({
                message: 'PUT request successfulll!!!!'
            })
        })
        .delete((req: Request, res: Response) => {       
        // Delete a menu     
            res.status(200).send({
                message: 'DELETE request successfulll!!!!'
            })
        })
    }
}