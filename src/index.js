import app from "./app.js";
import connectDb from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDb()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is up and running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    console.log("Problem with connecting the db");
  });
