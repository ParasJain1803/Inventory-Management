import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    user: {
        type: Schema.Types.ObjectId,
        ref: "Profile",
        required: true,
    },
    refresh_token: {
        type: String,
        default: ''
    }
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
