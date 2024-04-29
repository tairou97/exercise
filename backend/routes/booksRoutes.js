import bodyParser from "body-parser";
import express from "express";
import {
  GetBooks,
  PostBooks,
  DeleteBooks,
} from "../contoller/bookControllers.js";
const bookRoutes = express.Router();
bookRoutes.use(bodyParser.json());

bookRoutes.get("/", GetBooks).post("/", PostBooks).delete("/", DeleteBooks);
export default bookRoutes;
