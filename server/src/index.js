import {} from "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect(process.env.DATABASE_URI);

app.listen(3001, () => console.log("SERVER STARTED"));
