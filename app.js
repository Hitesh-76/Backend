require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("I will become Strongest Smartest Wealthiest Genius Billionaire");
});

app.get("/twitter", (req, res) => {
  res.send("Become the baddest king in your domain");
});

app.get("/facebook", (req, res) => {
  res.send("Iam billionaire of india");
});

app.get("/instagram", (req, res) => {
  res.send("<h1>please login at instagram</h1>");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
