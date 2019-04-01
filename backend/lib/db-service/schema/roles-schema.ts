import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const rolesSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,

        name: {
            type: String,
            require: true           
        }
    }
)