import User from "../model/User.js";

const GetUser = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (error) {
    res.status(200).json(error);
  }
};

const PosteUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({
      name,
      email,
      password,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(200).json(error);
  }
};

export { GetUser, PosteUser };
