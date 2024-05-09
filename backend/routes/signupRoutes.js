import express from "express";

const signupRoutes = express.Router();

import { GetUser, PosteUser } from "../contoller/userController.js";

signupRoutes.get("/", GetUser).post("/", PosteUser);
export default signupRoutes;
