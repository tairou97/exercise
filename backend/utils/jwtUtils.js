import jwt from "jsonwebtoken";
import crypto from "crypto";

const mykey = crypto.randomBytes(32).toString("hex");
console.log(mykey);

const generateToken = (user) => {
  const payload = {
    id: user._id,
    email: user.email,
    role: user.role,
  };
  return jwt.sign(payload, mykey, { expiresIn: "d3" });
};

export default generateToken;
