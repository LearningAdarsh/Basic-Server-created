import app from "./app.mjs";
import mongoose from "mongoose";

const dataBaseUrl =
  "mongodb+srv://School-management:340384792347@cluster0.4jxf50a.mongodb.net/shani";
mongoose
  .connect(dataBaseUrl, {})
  .then(() => console.log("Connected successfully to server"))
  .catch((error) => console.log(error));

const port = 5000;
app.listen(port, () => {
  console.log(`server started on http://localhost:${port}/`);
});
