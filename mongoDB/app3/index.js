const express = require("express");
require("./src/db/mongoose.js");
const chalk = require("chalk");
const userRouter = require("./src/routes/user.routs.js");

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.use(userRouter);

app.listen(port, () => {
  console.log(chalk.green("Server on air on port ", port));
});
