import * as Schemas from "./schemas/index.js";
import express from "express";
import connection from "./config/mongooseConnection.js";
import {config} from "dotenv";
config({path: ".env"});
import cors from 'cors';
import BodyParser from "body-parser";

const app = express();
connection();
app.use(cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

export default app;