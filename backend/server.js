import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoutes from "./routes/booksRoutes.js";
import signupRoutes from "./routes/signupRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";
import createAdminAccunt from "./scripts/admin.js";
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
const BASE_URL = process.env.BASE_URL;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
createAdminAccunt();
app.use("/books", bookRoutes);
app.use("/signup", signupRoutes);
app.use("/login", loginRoutes);

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
