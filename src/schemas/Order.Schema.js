import mongoose, { Types } from "mongoose";

const Order = new mongoose.Schema({
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

export default mongoose.model("Order", Order);