import * as mongoose from 'mongoose';

import { menuItemSchema } from './menu-item';

const Schema = mongoose.Schema;

export const menuSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        name: String,
        children: [{ type: Schema.Types.ObjectId, ref: 'menuItem' }]
    }
)

const menuItem = mongoose.model('menuItem', menuItemSchema);