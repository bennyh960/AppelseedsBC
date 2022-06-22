const express = require("express");
require("./db/mongoose");
const chalk = require("chalk");

const taskRouter = require("./routers/task.router.js");
const userRouter = require("./routers/user.router.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(taskRouter);

// app.use(express.bo)
const port = process.env.PORT || 3000;

// ================================================

app.listen(port, () => {
  //   console.log(chalk.green.inverse("Server is on port ", port));
  console.log(chalk.green("Server is on port ", port));
});
