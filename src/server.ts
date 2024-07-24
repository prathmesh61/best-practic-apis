import { Request, Response } from "express";
import { app } from "./app";
import express from "express";
import userRoute from "./routes/userRoute";
import authRoute from "./routes/authRoute";
import dotenv from "dotenv";

const port = process.env.PORT || 8000;
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

dotenv.config();
app.use(express.json());
app.use("/api/v1", userRoute);
app.use("/api/v1", authRoute);

const runningServer = () => {
  try {
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Problem in running server");
  }
};

runningServer();
