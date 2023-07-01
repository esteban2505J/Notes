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

router.get("/task", authToken, getTasks);
router.get("/task/:id", authToken, getTask);
router.post("/task", authToken, createTask);
router.delete("/task/:id", authToken, deleteTask);
router.put("/task/:", authToken, updateTask);

export default router;
