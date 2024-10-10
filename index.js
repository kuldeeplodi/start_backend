require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, resp) => {
  resp.send("hello world");
});
app.get("/login", (req, resp) => {
  resp.send("<h1>please login at chai aur code");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
