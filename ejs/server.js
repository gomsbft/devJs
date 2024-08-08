const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const data = {message: "helloworld"};
  res.render("index", data);
})

app.listen(8000, () => {
  console.log("서버 연결 http://localhost:8000");
})