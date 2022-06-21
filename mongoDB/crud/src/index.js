const express = require("express");
require("./db/mongoose");
const User = require("./db/moduls/users");
const Task = require("./db/moduls/tasks");

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.get("/users/:userID", async (req, res) => {
  //   User.find({ _id: req.params.userID }) // return array with the found obj

  try {
    const user = await User.findById(req.params.userID);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(e.message);
  }
});

app.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try {
    const newTask = await task.save();
    res.status(201).send(newTask);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.get("/tasks", async (req, res) => {
  try {
    const getTasks = await Task.find();
    res.send(getTasks);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.get("/tasks/:id", async (req, res) => {
  try {
    const getTask = await Task.findById(req.params.id);
    if (!getTask) {
      return res.status(404).send("Task not found");
    }
    res.send(getTask);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.listen(port, () => {
  //   console.log(chalk.green.inverse("Server is on port ", port));
  console.log("Server is on port ", port);
});
