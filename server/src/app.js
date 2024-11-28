import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { router as authRouter } from "./routes/auth.js";
import { router as roleRouter } from "./routes/role.js";
import { router as profileRouter } from "./routes/profile.js";
import { router as productRouter } from "./routes/product.js";
import { router as settingsRouter } from "./routes/settings.js";
import { errorHandler } from "./middleware/err.js";
export const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/user", roleRouter);
app.use("/api/profile", profileRouter);
app.use("/api/product", productRouter);
app.use("/api/settings", settingsRouter);
app.all("*", (req, res) => {
    return res.status(404).json({ success: false, data: "404 not found" });
});
app.use(errorHandler);
