const express = require("express");
const app = expres;

app.get("/", (req, resp) => {
  resp.send("hello world");
});
app.get("/login", (req, resp) => {
  resp.send("<h1>please login at chai aur code");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
