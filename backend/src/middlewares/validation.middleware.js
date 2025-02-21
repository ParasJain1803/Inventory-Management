import { validationResult } from "express-validator"
import { ApiError } from "../utils/ApiError";

export const Validation = (req,res,next) => {
    try {
        const result = validationResult(req);
        if(!result.isEmpty()) {
            throw new ApiError(result.array()[0].msg)
        }
    } catch (error) {
        next(error)
    }
}