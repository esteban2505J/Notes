import express from "express";
import dotenv from "dotenv";
// this is for print request
import morgan from "morgan";
import autRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", autRoutes);

export default app;
