import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const YachtSchema = new Schema ({
    name: {
        type: String,
        required: 'Enter yacht name'
    },
    length: {
        type: Number,
        required: 'Enter yacht length'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})