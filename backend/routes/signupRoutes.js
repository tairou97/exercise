import express from "express";

import { GetSignup, PosteSignup } from "../contoller/signupController.js";
const signupRoutes = express.Router();

signupRoutes.get("/signup", GetSignup).post("/signup", PosteSignup);
export default signupRoutes;
