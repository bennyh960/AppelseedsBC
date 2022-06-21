const express = require("express");
const Task = require("../db/moduls/tasks");
const router = new express.Router();

router.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try {
    const newTask = await task.save();
    res.status(201).send(newTask);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.get("/tasks", async (req, res) => {
  try {
    const getTasks = await Task.find();
    res.send(getTasks);
  } catch (e) {
    res.status(500).send(e.message);
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

router.delete("/tasks/:id", async (req, res) => {
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

module.exports = router;
