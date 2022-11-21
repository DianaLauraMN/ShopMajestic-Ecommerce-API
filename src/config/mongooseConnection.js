import {config} from "dotenv";
config({path: ".env"});
import mongoose from "mongoose";

const connection = () => {
    mongoose.connect(process.env.DATABASE);
}
export default connection;