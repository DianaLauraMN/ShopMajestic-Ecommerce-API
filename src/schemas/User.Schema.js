import mongoose, { Types } from "mongoose";

const User = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
        required: true,
    }, username:
    {
        type: String,
        maxlength: 20,
        required: true,
        unique: true,
    }, password: {
        type: String,
        required: true,
    }, email: {
        type: String,
        required: true,
        unique: true,
    }, role: {
        type: Types.ObjectId,
        ref: "Role",
        required: true,//<---
    }, lists: {
        type: Types.ObjectId,
        ref: "List",
    }
}, { versionKey: false });

export default mongoose.model("User", User);
