import { body } from "express-validator";
export class AuthValidation {
  static RegisterUser = [
    body("name").notEmpty().withMessage("name cannot be empty"),
    body("email").isEmail().notEmpty().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long")
      .notEmpty()
      .withMessage("Password IS REQUIRED")
  ];
}
