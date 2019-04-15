import * as mongoose from 'mongoose';
import { prop, Typegoose } from 'typegoose';
import { ApiModel, ApiModelProperty } from 'swagger-express-ts';

@ApiModel( {
    description : "Role model" ,
    name : "Role"
})
export class Role extends Typegoose {
    @ApiModelProperty( {
        description : "Id" ,
        required : true,
        example: ['59b65e8a-9b6b-40fb-8abf-85c6b5cc5d7f']
    } )
    @prop({ required: true, index: true, unique: true })
    id!: string;

    @ApiModelProperty( {
        description : "Name" ,
        required : true
    } )
    @prop({ required: true })
    name!: string;
}