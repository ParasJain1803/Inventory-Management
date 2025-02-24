import { AuthService } from "../services/Auth.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import status from "http-status";

export class AuthController {
  static RegisterUser = asyncHandler(async (req, res) => {    
    const res_obj = await AuthService.RegisterUser(req.body);
    res.status(status.CREATED).send(res_obj);
  });
}
