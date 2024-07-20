import { Request, Response } from "express";
import { app } from "./app";
import express from "express";
import userRoute from "./routes/userRoute";
const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});
app.use(express.json());
app.use("/api/v1", userRoute);

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
