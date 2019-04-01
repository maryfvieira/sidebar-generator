import * as mongoose from 'mongoose';
import { breadcrumbSchema } from './breadcrumb';
import { rolesSchema } from './roles';
import { menuSubItemSchema } from './menu-sub-item';

const Schema = mongoose.Schema;

export const menuItemSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,

        path: {
            type: String,
            require: true           
        },
        componentName: {
            type: String,
            require: true           
        },
        name: {
            type: String,
            require: true           
        },
        roles: [{type: Schema.Types.ObjectId, ref: 'roles'}],
        breadCrumb: {type: Schema.Types.ObjectId, ref: 'breadCrumb' },
        children: [{ type: Schema.Types.ObjectId, ref: 'menuSubItem' }]
    }
)

const menuSubItem = mongoose.model('menuSubItem', menuSubItemSchema);
const roles = mongoose.model('roles', rolesSchema);
const breadCrumb = mongoose.model('breadCrumb', breadcrumbSchema);