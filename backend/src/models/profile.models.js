import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    email: { type: String, required: true, unique: true }, // Ensure email is required
    // Add other profile fields if needed
  },
  { timestamps: true } // Include timestamps for created and modified fields
);

export const Profile = mongoose.model("Profile", ProfileSchema);
