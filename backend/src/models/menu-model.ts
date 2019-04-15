import * as mongoose from 'mongoose';
import { prop, Typegoose, arrayProp, Ref } from 'typegoose';
import { Breadcrumb } from './breadcrumb-model';
import { Role } from './role-model';
import { ApiModel, ApiModelProperty } from 'swagger-express-ts';

@ApiModel( {
    description : "Menu model",
    name : "Menu"
})
export class Menu extends Typegoose {

    @ApiModelProperty( {
        description : "Id" ,
        required : true,
        example: ['59b65e8a-9b6b-40fb-8abf-85c6b5cc5d7f']
    } )
    @prop({ required: true, index: true, unique: true })
    id!: string;

    @ApiModelProperty( {
        description : "id from parent menu" ,
        required : true,
        example: ['59b65e8a-9b6b-40fb-8abf-85c6b5cc5d7f']
    } )
    @prop()
    parentId!: string;
    
    @ApiModelProperty( {
        description : "Name" ,
        required : true
    } )
    @prop({ required: true })
    name!: string;

    @ApiModelProperty( {
        description : "Path" ,
        required : true,
        example: ['59b65e8a-9b6b-40fb-8abf-85c6b5cc5d7f']
    } )
    @prop({ required: true })
    path!: string;

    @ApiModelProperty( {
        description : "Component Name" ,
        required : true,
        example: ['59b65e8a-9b6b-40fb-8abf-85c6b5cc5d7f']
    } )
    @prop({ required: true })
    componentName!: string;

    @ApiModelProperty( {
        description : "Menu level" ,
        required : true,
        example: ['59b65e8a-9b6b-40fb-8abf-85c6b5cc5d7f']
    } )
    @prop({ required: true })
    level!: number;

    @ApiModelProperty( {
        description : "Roles" ,
        required : true,
        example: ['59b65e8a-9b6b-40fb-8abf-85c6b5cc5d7f']
    } )
    @arrayProp({ itemsRef: Role })
    roles!: Ref<Role>[];

    @ApiModelProperty( {
        description : "BreadCrumb" ,
        required : true,
        example: ['59b65e8a-9b6b-40fb-8abf-85c6b5cc5d7f']
    } )
    @prop({ ref: Breadcrumb })
    breadCrumb!: Ref<Breadcrumb>;
}