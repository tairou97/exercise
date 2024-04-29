import mongoose from "mongoose";
import { string } from "prop-types";
const { Schema, model } = mongoose;

const Books = new Schema(
  {
    title: String,
    cover: String,
    author: String,
    price: Number,
    genre: String,
    pubilshYear: String,
    description: String,
  },
  { timestamps: true }
);
