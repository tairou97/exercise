import jwt from "jsonwebtoken";
import crypto from "crypto";

const mykey = crypto.randomBytes(32).toString("hex");

const generateToken = (user) => {
  const payload = {
    id: user._id,
    email: user.email,
    role: user.role,
  };
  return jwt.sign(payload, mykey, { expiresIn: "3d" });
};
console.log(generateToken);
export { generateToken };
