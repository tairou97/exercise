import User from "../model/User.js";
import bcrypt from "bcrypt";

const createUser = async (userData) => {
  const { name, email, password } = userData;
  const hashPassword = await bcrypt.hash(password, 10);
  const existingCustomer = await User.findOne({
    email: email,
  });

  if (!existingCustomer) {
    const createdUser = new User({
      name,
      email,
      password: hashPassword,
      role: "customer",
    });

    const saveData = await createdUser.save();
    return saveData;
  } else {
    console.log("User already exist");
  }
};

export default createUser;
