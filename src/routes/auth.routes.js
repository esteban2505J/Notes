import { Router } from "express";

import {
  register,
  login,
  logOut,
  profile,
} from "../controllers/auth.controllers.js";
import { authToken } from "../middlewars/authToken.js";

const router = new Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logOut);
router.get("/profile", authToken, profile);

export default router;
