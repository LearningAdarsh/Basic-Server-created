import app from "./app.mjs";

const port = 5000;
app.listen(port, () => {
  console.log(`server started on http://localhost:${port}/`);
});
