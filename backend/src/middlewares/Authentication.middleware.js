import { ApiError } from "../utils/ApiError.js";
import status from "http-status";
import { validateToken } from "../utils/Token.utils.js";

export const Authentication = (req, res, next) => {
  try {
    const headers = req.headers["authorization"] || "";
    if (!headers) {
      throw new ApiError("pLEASE lOGIN FIRST", status.UNAUTHORIZED);
    }

    const token = headers.split(" ")[1];
    if (!token) {
      throw new ApiError(status.UNAUTHORIZED, "Token is required");
    }
    const payload = validateToken(token);
    console.log(token);
    
    req.user = payload.userid;
    next();
  } catch (error) {
    next(error);
  }
};
