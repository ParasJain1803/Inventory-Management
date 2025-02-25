import { User } from "../models/user.models.js";
import { Profile } from "../models/profile.models.js";
import { ApiError } from "../utils/ApiError.js";
import { generateToken } from "../utils/Token.utils.js";

export class AuthService {
  static async RegisterUser(body) {
    const { email, password, name } = body;
    const checkExist = await User.findOne({ email });
    if (checkExist) {
      throw new ApiError(401, "User already exists");
    }

    const user = await User.create({ email, password, name });

    // Check if user is actually created
    if (!user || !user._id) {
      throw new ApiError(500, "User creation failed, no ID returned");
    }

    const token = generateToken(user);
    const refreshToken = generateToken(user, "2d");

    const profile = await Profile.create({
      user: user._id,
      email: user.email,
      refreshToken,
    });

    return {
      msg: "User registered successfully",
      token: "",
    };
  }
  static async LoginUser(body) {
    const { email, password, name } = body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new ApiError(401, "User not registered");
    }

    // Check if user is actually created
    if (password !== user.password) {
      throw new ApiError(403, "Invalid password");
    }

    const token = generateToken(user);
    return {
      msg: "User login successfully",
      token,
    };
  }
  static async GetProfile(user) {
    const checkExist = await User.findById(user).select("name email");

    if (!checkExist) {
      throw new ApiError(401, "User not found");
    }
    return {
      msg: "User data fetched successfully",
      user: checkExist,
    };
  }
}
