const express = require("express");
const app = express();
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
// const cors = require("cors");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(expressLayouts);
app.use(express.static("public"));

const users2 = [
  {name: "Kim", age: 17, role: "front"},
  {name: "Lee", age: 25, role: "back"},
  {name: "Park", age: 30, role: "full"},
  {name: "Choi", age: 16, role: "front"}
]

app.get("/", (req, res) => {
  const data = {message: "helloworld"};
  res.render("index", { 
    tasks: tasks, users2,
    data,
    people: [
      {name: "Kim", age: 17, role: "front"},
      {name: "Lee", age: 25, role: "back"},
      {name: "Park", age: 30, role: "full"},
      {name: "Choi", age: 16, role: "front"}
    ]

  });
})

app.get("/abuot", (req, res) => {
  res.render("about")
})

app.get("/form", (req, res) => {
  res.render("form")
})

app.post("/submit", (req, res) => {
  const {name, email} = req.body;
  res.render("result", {name, email})
})

let tasks = [];

app.post("/addTask", (req, res) => {
  const newTask = req.body.newTask;
  if(newTask) {
    tasks.push(newTask);
  }
  res.redirect("/");
})

app.post("/deleteTask", (req, res) => {
  const deleteTask = req.body.task;
  tasks = tasks.filter(task => task !== deleteTask);
  res.redirect("/");
})

app.listen(8000, () => {
  console.log("서버 연결 http://localhost:8000");
})