import User from "../model/User.js";
import bcrypt from "bcrypt";

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  const existingCustomer = await User.findOne({
    email: email,
  });

  if (!existingCustomer) {
    const createdUser = await User.create({
      name,
      email,
      password: hashPassword,
      role: "customer",
    });
  } else {
    console.log("User already exist");
  }
};
