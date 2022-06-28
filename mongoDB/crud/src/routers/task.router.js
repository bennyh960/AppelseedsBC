const express = require("express");
const chalk = require("chalk");
const Task = require("../db/moduls/tasks");
const router = new express.Router();
const auth = require("../middelware/auth.js");

router.post("/tasks", auth, async (req, res) => {
  // const task = new Task(req.body);
  const task = new Task({
    ...req.body,
    owner: req.user._id,
  });
  try {
    const newTask = await task.save();
    res.status(201).send(newTask);
  } catch (e) {
    res.status(400).send(e.message);
    console.log(chalk.red(e.message));
  }
});

// GET tasks?complete=true
// GET tasks?limit=2&skip=2
// GET tasks?sortBy=createdAt:asc dsc

router.get("/tasks", auth, async (req, res) => {
  const match = {};
  const sort = {};

  if (req.query.complete) {
    match.complete = req.query.complete === "true";
  }

  if (req.query.sortBy) {
    // sort.createdAt = req.query.sortBy === "dsc" ? -1 : 1; // user just set asc or dsc and not sort by
    const parts = req.query.sortBy.split(":");
    sort.parts[0] = parts[1] === "desc" ? -1 : 1;
  }
  try {
    // const tasks = await Task.find({ owner: req.user._id });
    // await req.user.populate("tasks").execPopulate();
    await req.user
      .populate({
        path: "tasks",
        match,
        // match: {
        //   complete: false,
        // },
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort,
        },
      })
      .execPopulate();

    res.send(req.user.tasks);
  } catch (e) {
    res.status(500).send(e.message);
    console.log(chalk.red(e.message));
  }
});

router.get("/tasks/:id", auth, async (req, res) => {
  try {
    // find any task by id
    // const getTask = await Task.findById(req.params.id);
    // find task related to user who create it
    const _id = req.params.id;
    const getTask = await Task.findOne({ _id, owner: req.user._id });

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
router.patch("/tasks/:id", auth, async (req, res) => {
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

    // const task = await Task.findById(req.params.id);
    const task = await Task.findOne({ _id: req.params.id, owner: req.user._id });

    if (!task) {
      console.log(chalk.red.inverse("Error: Task not found"));
      return res.status(400).send("Task not found");
    }

    testingRequestProperties.forEach((update) => (task[update] = req.body[update]));
    task.save();

    res.send(task);
  } catch (error) {
    res.status(404).send(error.message);
    console.log(chalk.red(error.message));
  }
});

// Delete

router.delete("/tasks/:id", auth, async (req, res) => {
  try {
    // const task = await Task.findByIdAndDelete(req.params.id);
    const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id });
    if (!task) {
      console.log(chalk.red.inverse(`Error: Task not found for user ${req.user.name}`));
      return res.status(404).send("task not found");
    }
    res.send(task);
  } catch (error) {
    res.status(500).send();
    console.log(chalk.red(error.message));
  }
});

module.exports = router;
