const express = require("express");
const chalk = require("chalk");
const Task = require("../db/moduls/tasks");
const router = new express.Router();

router.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try {
    const newTask = await task.save();
    res.status(201).send(newTask);
  } catch (e) {
    res.status(400).send(e.message);
    console.log(chalk.red(e.message));
  }
});

router.get("/tasks", async (req, res) => {
  try {
    const getTasks = await Task.find();
    res.send(getTasks);
  } catch (e) {
    res.status(500).send(e.message);
    console.log(chalk.red(e.message));
  }
});

router.get("/tasks/:id", async (req, res) => {
  try {
    const getTask = await Task.findById(req.params.id);
    if (!getTask) {
      return res.status(404).send("Task not found");
    }
    res.send(getTask);
  } catch (e) {
    res.status(500).send(e.message);
    console.log(chalk.red(e.message));
  }
});

// * UPDATE ====================================

// *update task
router.patch("/tasks/:id", async (req, res) => {
  // adding validtion if try to update not relvant property
  const validUpdateArray = ["description", "complete"];
  const testingRequestProperties = Object.keys(req.body);
  const isValid = testingRequestProperties.every((property) => {
    return validUpdateArray.includes(property);
  });

  if (!isValid) {
    console.log(chalk.red.inverse("Error: invalid update"));
    return res.status(400).send("Error: Invalid update");
  }

  try {
    // in order to insert midleware before save we need to change findbyidandupdate methode so we can
    // do somthing before save our model. this is an excresise from andrew
    // const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    const task = await Task.findById(req.params.id);
    testingRequestProperties.forEach((update) => (task[update] = req.body[update]));
    task.save();
    if (!task) {
      console.log(chalk.red.inverse("Error: Task not found"));
      return res.status(400).send("Task not found");
    }
    res.send(task);
  } catch (error) {
    res.status(404).send(error.message);
    console.log(chalk.red(error.message));
  }
});

// Delete

router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      console.log(chalk.red.inverse("Error: Task not found"));
      return res.status(404).send("task not found");
    }
    res.send(task);
  } catch (error) {
    res.status(500).send();
    console.log(chalk.red(e.message));
  }
});

module.exports = router;
