import mongoose, { Types } from "mongoose";

const Product = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
        required: true,
    }, price: {
        type: Number,
        required: true,
    }, stock: {
        type: Number,
        required: true,
    }, description: {
        type: String,
        maxlength: 50,
        required: true,
    }, images: {
        type: [String],
    }, rate: {
        type: Number,
    }, category: {
        type: Types.ObjectId,
        ref: "Category",
        required: true,
    }
}, { versionKey: false });

export default mongoose.model("Product", Product);
