import Books from "../model/Books.js";

const GetBooks = async (req, res) => {
  try {
    const books = await Books.find({});
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({ error: "Data not Found" });
  }
};

const PostBooks = async (req, res) => {
  const {
    title,
    cover,
    author,
    price,
    genre,
    pubilshYear,
    description,
    bestSeller,
    category,
  } = req.body;
  try {
    const books = await Books.create({
      title,
      cover,
      author,
      price,
      genre,
      pubilshYear,
      description,
      bestSeller,
      category,
    });
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({ error: "post Not found" });
  }
};

const DeleteBooks = async (req, res) => {
  try {
    const books = await Books.deleteMany({});
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({ error: "Can`t Delete" });
  }
};

export { GetBooks, PostBooks, DeleteBooks };
