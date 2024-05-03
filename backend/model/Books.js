import mongoose from "mongoose";
const { Schema, model } = mongoose;
const categorieArray = [
  "Fiktion",
  "Non-Fiktion",
  "Krimi",
  "Thriller",
  "Science-Fiction",
  "Fantasy",
  "Horror",
  "Romantik",
  "Biografie",
  "Geschichte",
  "Kinderbuch",
  "Kochbuch",
  "Reise",
  "Kunst und Fotografie",
  "Gesundheit und Fitness",
  "Business und Geld",
  "Selbsthilfe",
  "Religion und Spiritualität",
  "Humor",
  "Manga",
  "IT",
];
const BookSchema = new Schema(
  {
    title: String,
    cover: String,
    author: String,
    price: Number,
    genre: String,
    pubilshYear: Number,
    description: String,
    bestSeller: Boolean,
    sales: Number,
    //wenn sales if  salei ist da ? dann preis * 100 / sales
    category: {
      type: String,
      enum: categorieArray,
    },
  },
  { timestamps: true }
);

const Book = model("Book", BookSchema);
export default Book;
