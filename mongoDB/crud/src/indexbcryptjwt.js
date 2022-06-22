const express = require("express");
require("./db/mongoose");
const chalk = require("chalk");

// ************************************************
//?      version 4 : including autentication     //
// ************************************************

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
