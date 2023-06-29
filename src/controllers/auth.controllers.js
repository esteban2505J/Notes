import user from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  let { email, password, userName } = req.body;

  const passwordHash = await bcrypt.hash(password, 10);

  try {
    const newUser = new user({
      email,
      password: passwordHash,
      userName,
    });
    const userSaved = await newUser.save();
    res.json(userSaved);
  } catch (error) {
    console.log(error);
  }
};

export const login = (req, res) => res.send("Login");
