import mongoose, { Types } from "mongoose";

const Comment = new mongoose.Schema({
    user: {
        type: Types.ObjectId,
    }, content: {
        type: String,
        maxlength: 200,
        required: true,
    }, rate: {
        type: Number,
        required: true,
    }
}, { versionKey: false });

export default mongoose.model("Comment", Comment);