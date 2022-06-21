const express = require("express");
require("./db/mongoose");

const taskRouter = require("./routers/task.router.js");
const userRouter = require("./routers/user.router.js");

const app = express();

app.use(userRouter);
app.use(taskRouter);

app.use(express.json());
const port = process.env.PORT || 3000;

// ================================================

app.listen(port, () => {
  //   console.log(chalk.green.inverse("Server is on port ", port));
  console.log("Server is on port ", port);
});
