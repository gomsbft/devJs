const express = require('express');
const app = express();
const port = 3000;
const path = require("path"), async = require("async"), fs = require("fs");
const users = [
  {name: "Kim", email: "Kim@naver.com"},
  {name: "Lee", email: "Lee@naver.com"},
  {name: "Park", email: "Park@naver.com"}
]

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "public", "/index.html"))
})

app.get("/post", (req, res) => {
  res.send("포스트 페이지 입니다")
})

app.get("/shop", (req, res) => {
  res.send("쇼핑 페이지 입니다")
})

app.get("/self", (req, res) => {
  res.send("자기 소개 페이지 입니다")
})

// app.get("/greet", (req, res) => {
//   res.send(JSON.stringify({message: "안녕하세요!!!"}))
// })
app.get("/users", (req, res) => {
  res.json(users);
})

app.listen(port, () => {
  console.log(`서버 실행! http://localhost:${port}`)
})