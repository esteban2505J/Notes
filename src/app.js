import express from "express";
import dotenv from "dotenv";
// this is for print request
import morgan from "morgan";
import autRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import taskRoutes from "./routes/task.routes.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/api", autRoutes);
app.use("/api", taskRoutes);

export default app;
