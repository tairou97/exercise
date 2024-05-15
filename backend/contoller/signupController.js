import createUser from "../service/signup.js";
import User from "../model/User.js";

export const GetSignup = async (req, res) => {
  try {
    const user = await User.create({});
    res.status(201).json({ user: user, message: "user" });
  } catch (error) {
    res.status(401).json(error);
  }
};

export const PosteSignup = async (req, res) => {
  try {
    const userData = req.body;
    const user = await createUser(userData);
    res.status(201).json({ user: user, message: "user" });
  } catch (error) {
    res.status(401).json(error);
  }
};
