import express from "express";
import { authController } from "../controllers/auth.js";
import {
    userCreateValidationArgs,
    userLoginValidationArgs,
} from "../utils/validators/user.js";
import { validateRequest } from "../middleware/validateRequest.js";
export const router = express.Router();

router
    .route("/login")
    .post(userLoginValidationArgs, validateRequest, authController.login);
router
    .route("/signup")
    .post(userCreateValidationArgs, validateRequest, authController.signup);
