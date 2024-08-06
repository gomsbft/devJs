const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log("서버 실행!")
})
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get("/post", (req, res) => {
  res.send("포스트 페이지 입니다")
})

app.get("/shop", (req, res) => {
  res.send("쇼핑 페이지 입니다")
})