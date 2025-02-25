import { Router } from "express";
import { AuthValidation } from "../validations/AuthValidation.js";
import { Validation } from "../middlewares/validation.middleware.js";
import { AuthController } from "../controllers/Auth.controller.js";
import { Authentication } from "../middlewares/Authentication.middleware.js";


const router = Router();

router.post(
  "/register",
  AuthValidation.RegisterUser,
  Validation,
  AuthController.RegisterUser
);

router.post(
  "/login",
  AuthValidation.LoginUser,
  Validation,
  AuthController.LoginUser
);

router.get(
  "/profile",
  Authentication,
  AuthController.GetProfile
);


export default router;
