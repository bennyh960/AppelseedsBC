const express = require("express");
require("../db/mongoose");
const User = require("../db/moduls/users");
const Task = require("../db/moduls/tasks");

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

// * UPDATE ====================================
app.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdateArray = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) => {
    return allowedUpdateArray.includes(update);
  });

  if (!isValidOperation) {
    return res.status(400).send(`Error : Invalid Update (property issue) check ${updates}`);
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    // console.log(user);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.send(user);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// *update task
app.patch("/tasks/:id", async (req, res) => {
  // adding validtion if try to update not relvant property
  const validUpdateArray = ["description", "complete"];
  const testingRequestProperties = Object.keys(req.body);
  const isValid = testingRequestProperties.every((property) => {
    return validUpdateArray.includes(property);
  });

  if (!isValid) {
    return res.status(400).send("Error: Invalid update");
  }

  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!task) {
      return res.status(400).send("Task not found");
    }
    res.send(task);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// Delete
app.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.send(user);
  } catch (error) {
    res.status(500).send();
  }
});
app.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send("task not found");
    }
    res.send(task);
  } catch (error) {
    res.status(500).send();
  }
});

// ================================================

app.listen(port, () => {
  //   console.log(chalk.green.inverse("Server is on port ", port));
  console.log("Server is on port ", port);
});
