import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const breadcrumbSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,

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
    }
)