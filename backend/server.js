import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoutes from "./routes/booksRoutes.js";
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
console.log(PORT);
const BASE_URL = process.env.BASE_URL;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/books", bookRoutes);

async function DataBase() {
  mongoose.connect(BASE_URL);
  console.log("Data is Connect");
}
DataBase().catch((e) => {
  console.log(e);
});

app.listen(PORT, () => {
  console.log(`Listening To Port:  ${PORT}`);
});
