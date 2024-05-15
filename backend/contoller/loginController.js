import { login } from "../service/login.js";

const PosteLogin = async (req, res) => {
  try {
    const { email, password } = req.body; // von User
    const token = await login(email, password);
    res.json({ token: token });
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ message: error.message });
  }
};

export default PosteLogin;
