import mongoose, { Types } from "mongoose";

const ProductComment = new mongoose.Schema({
    product: {
        type: Types.ObjectId,
        required: true,
    }, comments: {
        type: [Types.ObjectId],
        required: true,
    }
}, { versionKey: false });

export default mongoose.model("ProductComment", ProductComment);
