import { Router } from "express";
import { AuthValidation } from "../validations/AuthValidation.js";
import { Validation } from "../middlewares/validation.middleware.js";
import { AuthController } from "../controllers/Auth.controller.js";

const router = Router();

router.post(
  "/register",
  AuthValidation.RegisterUser,
  Validation,
  AuthController.RegisterUser
);

export default router;
