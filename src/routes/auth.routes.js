import { Router } from "express";

import {
  register,
  login,
  logOut,
  profile,
  verifyToken,
} from "../controllers/auth.controllers.js";
import { authToken } from "../middlewars/authToken.js";
import { validateSchema } from "../middlewars/validator.mddlewar.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = new Router();

router.get("/", (req, res) => res.send("home"));
router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logOut);
router.get("/verify", verifyToken);
router.get("/profile", authToken, profile);

export default router;
