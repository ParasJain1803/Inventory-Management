import mongoose from "mongoose";
import { PublicData } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${PublicData.mongo_uri}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB conection failed: ", error);
    process.exit(1);
  }
};

export default connectDB;
