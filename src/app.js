import express from "express";
import morgan from "morgan";
import helmet from "helmet";

const app = express();
app.use(express.json({ limit: "100kb" }));
app.use(helmet());
app.use(morgan("tiny"));

// importing the created routes
app.get("/", (req, res) => {
  res.send("Welcome to the social media page");
});

export default app;
