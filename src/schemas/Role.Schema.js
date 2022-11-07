import mongoose from "mongoose";

const Role = new mongoose.Schema({
    type: {
        type: String,
        maxlength: 20,
        required: true,
    }
}, { versionKey: false });

export default mongoose.model("Role", Role);
