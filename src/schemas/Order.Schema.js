import mongoose, { Types } from "mongoose";

const ProductOverview = new mongoose.Schema({
    user: {
        type: Types.ObjectId,
    }, productsOverview: {
        type: [Types.ObjectId],
        required: true,
    }, total: {
        type: Number,
        required: true,
    }, date:{
        type: Date
    }
}, { versionKey: false });