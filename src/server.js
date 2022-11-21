import { config } from "dotenv";
config({ path: ".env" });
import app from "./main.js";
app.listen(process.env.PORT, process.env.HOST, () => {
    console.log("Server running");
});