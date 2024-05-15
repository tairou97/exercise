import express from "express";
import PosteLogin from "../contoller/loginController.js";

const loginRoutes = express.Router();

loginRoutes.post("/login", PosteLogin);

export default loginRoutes;
