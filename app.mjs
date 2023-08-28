import express from "express";
import Users from "./userModel.mjs";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

// parse body
app.use(express.json());

app.post("/instagram", async (req, res) => {
  // console.log(req.body);
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({
      message: "username and password are required",
    });
  }
  const user = await Users.create(req.body);
  user.save();
  res.json("User created successfully");
});

app.all("*", (req, res) => {
  res.status(404).json({
    message: "route not found",
  });
});

export default app;
