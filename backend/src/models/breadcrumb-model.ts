import * as mongoose from 'mongoose';
import { prop, Typegoose } from 'typegoose';
import { ApiModel, ApiModelProperty } from 'swagger-express-ts';

@ApiModel( {
    description : "Breadcrumb model" ,
    name : "Breadcrumb"
})
export class Breadcrumb extends Typegoose {
    
    @prop({ required: true, index: true, unique: true })
    id!: string;

    @ApiModelProperty( {
        description : "Breadcrumb item name" ,
        required : true
    } )
    @prop({ required: true })
    name!: string;

    @ApiModelProperty( {
        description : "Font awesome icon" ,
        required : true,
        example: ['fa-credit-card']
    } )
    @prop({ required: true })
    icon!: string;

    @ApiModelProperty( {
        description : "The label of the breadcrum's item" ,
        required : true
    } )
    @prop({ required: true })
    label!: string;

}