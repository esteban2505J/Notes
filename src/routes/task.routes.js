import { Router } from "express";
import { authToken } from "../middlewars/authToken.js";
import {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controllers.js";

const router = Router();

router.get("/tasks", authToken, getTasks);
router.get("/tasks/:id", authToken, getTask);
router.post("/tasks", authToken, createTask);
router.delete("/tasks/:id", authToken, deleteTask);
router.put("/tasks/:id", authToken, updateTask);

export default router;
