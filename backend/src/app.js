import express from "express"; 
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
);
app.use(morgan("dev"))
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false}));

//routes import
import userRouter from "./routes/index.js";

// routes declarations
app.use("/api/v1", userRouter);

export { app };