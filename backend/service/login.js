import User from "../model/User.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwtUtils.js";

const login = async (email, password) => {
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      throw new Error("User not found!");
    }
    const isPasswordValid = bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    const token = generateToken(existingUser);

    return token;
  } catch (error) {
    console.log(error.message);
    throw new Error("Invalid credentials");
  }
};

export { login };
