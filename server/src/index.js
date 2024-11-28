import { app } from "./app.js";
import { connectDB } from "./db/connection.js";
import "dotenv/config";

async function initServer() {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to Database...");
    app.listen(process.env.PORT, () => console.log("Server Started..."));
}
initServer();
