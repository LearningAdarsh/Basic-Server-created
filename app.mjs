import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

// parse body
app.use(express.json());

app.all("*", (req, res) => {
  res.status(404).json({
    message: "route not found",
  });
});

export default app;
