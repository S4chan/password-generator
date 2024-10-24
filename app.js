const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.redirect("/password-random");
});

app.get("/password-random", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`);
});
