import { validationResult } from "express-validator";
import { ApiError } from "../utils/ApiError.js";

export const Validation = (req, res, next) => {
  try {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      throw new ApiError(result.array()[0].msg);
    }
    next();
  } catch (error) {
    console.log("ERROR IN VALIDATION MIDDLEWARE"); // log the error for debugging purposes
    next(error);
  }
};
