import express from "express";

const app = express();
app.use(express.json({ limit: "100kb" }));

// importing the created routes

export default app;
