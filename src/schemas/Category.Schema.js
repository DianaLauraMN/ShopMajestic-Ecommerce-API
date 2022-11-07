import mongoose from "mongoose";

const Category = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 30,
        required: true,
    }
}, { versionKey: false });

export default mongoose.model("Category", Category);