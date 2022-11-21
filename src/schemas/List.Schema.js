import mongoose, { Types } from "mongoose";

const List = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
        required: true,
    }, items: {
        type: Number,
        minlength: 0,
    }, lists: {
        type: [Types.ObjectId],
        ref: "Product",
    }
}, { versionKey: false });

export default mongoose.model("List", List);
