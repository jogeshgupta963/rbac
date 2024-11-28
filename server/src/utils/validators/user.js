import { body } from "express-validator";

export const userCreateValidationArgs = [
    body("name").isString().withMessage("Name is required"),
    body("role").optional(),
    body("email").isString().withMessage("Email is required"),
    body("password").isString().withMessage("Password is required"),
];
export const userLoginValidationArgs = [
    body("email").isString().withMessage("Email is required"),
    body("password").isString().withMessage("Password is required"),
];
