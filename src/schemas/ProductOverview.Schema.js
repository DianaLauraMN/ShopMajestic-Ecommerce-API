import mongoose from "mongoose";

const ProductOverview = new mongoose.Schema({
    product: {
        type: Types.ObjectId,
        required: true,
    }, quantity: {
        type: Number,
        required: true,
    }, total: {
        type: Number,
        required: true,
    }
}, { versionKey: false });

export default mongoose.model("ProductOverview", ProductOverview);
