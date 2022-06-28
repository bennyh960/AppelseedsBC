const express = require("express");
require("../db/mongoose");
const chalk = require("chalk");

const taskRouter = require("../routers/task.router.js");
const userRouter = require("../routers/user.router.js");

// ************************************************
//?      version 5 : Creating custom express midlawere      //
// ************************************************

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* custom middelware
// app.use((req, res, next) => {
//   if (req.method === "Get") {
//     res.send("GET requests are disable");
//   } else {
//     next();
//   }
//   next();
// });

// * Custom middelware
// app.use((req, res, next) => {
//   res.status(503).send("Site is currently down for maintanance. check back soon");
// });

app.use(userRouter);
app.use(taskRouter);

// app.use(express.bo)
const port = process.env.PORT || 3000;

// ================================================

app.listen(port, () => {
  //   console.log(chalk.green.inverse("Server is on port ", port));
  console.log(chalk.green("Server is on port ", port));
});

// * bcrypt demo
// const bcrypt = require("bcryptjs");
// const myFunc = async () => {
//   const password = "12345";
//   const hashedPassword = await bcrypt.hash(password, 8);
//   console.log(chalk.blue(password));
//   console.log(chalk.blue(hashedPassword));

//   const isMatch = await bcrypt.compare(password, hashedPassword);
//   console.log(chalk.yellow.inverse(isMatch));
// };

// myFunc();

// * jwt - json websocket token demo
// const jwt = require("jsonwebtoken");
// const myfunc = async () => {
//   const token = jwt.sign({ _id: "ab123" }, "thisismynewcourse", { expiresIn: "3 seconds" });
//   console.log(chalk.yellow(token));

//   const data = jwt.verify(token, "thisismynewcourse");
//   console.log(data);
// };
// myfunc();

// Using relation between task and user
// const Task = require("./db/moduls/tasks.js");
// const User = require("./db/moduls/users.js");
// const main = async () => {
// * task populate
// const task = await Task.findById("62b9583848c5f92328c0b46e");
// const user = await task.populate("owner").execPopulate(); // user id is got a ref in task model
// console.log(user);
// console.log(task.owner);
// * user
// const user = await User.findById("62b8d2483b2cfb4e00bd30c6");
// await user.populate("tasks").execPopulate();
// console.log(user.tasks); // define by userSchema.virtual()at users.js
// };

// main();
