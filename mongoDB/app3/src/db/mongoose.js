const mongoose = require("mongoose");
const chalk = require("chalk");

mongoose
  .connect("mongodb://localhost:27017/app3-test")
  .then(() => {
    console.log(chalk.green.inverse("Mongoose connect"));
  })
  .catch(() => {
    console.log(chalk.red.inverse("Mongoose connection faild"));
  });
