import { Router } from "express";

import {
  register,
  login,
  logOut,
  profile,
} from "../controllers/auth.controllers.js";
import { authToken } from "../middlewars/authToken.js";
import { validateSchema } from "../middlewars/validator.mddlewar.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = new Router();

router.get("/", (req, res) => res.send("home"));
router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logOut);
router.get("/profile", authToken, profile);

export default router;
