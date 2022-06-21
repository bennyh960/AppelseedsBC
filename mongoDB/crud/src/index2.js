const express = require("express");
// const chalk = require("chalk");
require("./db/mongoose");
const User = require("./db/moduls/users");
const Task = require("./db/moduls/tasks");

// ?=====================================================================
//  First version with promisis. next version is with async await
// ?=====================================================================

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.post("/users", (req, res) => {
  //   console.log(req.body);
  //   res.send("Testing");
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
      //   res.end();
    })
    .catch((e) => {
      console.log(e.message);
      res.status(400).send(e.message);
    });
});

app.get("/users", (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
});

app.get("/users/:userID", (req, res) => {
  //   User.find({ _id: req.params.userID }) // return array with the found obj
  User.findById(req.params.userID)
    .then((user) => {
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
});

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => {
      res.status(201).send(task);
    })
    .catch((e) => {
      res.status(400).send(e.message);
    });
});

app.get("/tasks", (req, res) => {
  Task.find({})
    .then((tasks) => {
      res.send(tasks);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
});

app.get("/tasks/:id", (req, res) => {
  Task.findById(req.params.id)
    .then((task) => {
      if (!task) {
        return res.status(404).send("Task not found");
      }
      res.send(task);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
});

app.listen(port, () => {
  //   console.log(chalk.green.inverse("Server is on port ", port));
  console.log("Server is on port ", port);
});
