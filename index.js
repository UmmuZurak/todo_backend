const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const { json } = require("express");

//import routes in index.js
const todoRoutes = require("./routes/todoRoutes");

const app = express();

// assign a uinque localhost number to our local url
const port = 3000;

//user cors package
app.use(cors());

app.use(json());

//intial route
app.get("/", function (req, res) {
  res.send("Welcome to homepage");
});

//assign routes to app and identify them with a particular path
app.use("/todos", todoRoutes);

//server listen port 3000
app.listen(port, function () {
  console.log(`Listening on http://localhost:${port}`);
});

const dbURI = "mongodb+srv://khaira:khaira$@project-cluster.9efde.mongodb.net/todo_database?retryWrites=true&w=majority";

//connect application to mongoDB
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(function (response) {
    console.log("Connected to mongodb");
  })
  .catch(function (err) {
    console.log("could not connect to mongodb");
  });
