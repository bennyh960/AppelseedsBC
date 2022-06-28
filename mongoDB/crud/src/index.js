const express = require("express");
require("./db/mongoose");
const chalk = require("chalk");

const taskRouter = require("./routers/task.router.js");
const userRouter = require("./routers/user.router.js");

// ************************************************
//?      Section 14 v1: file upload      //
// *****************************

const app = express();

//*multer
// const multer = require("multer");
// const upload = multer({
//   dest: "images",
// });
// app.post("/upload", upload.single("upload"), (req, res) => {
//   res.send();
// });
//

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use(taskRouter);

const port = process.env.PORT || 3000;

// ================================================

app.listen(port, () => {
  console.log(chalk.green("Server is on port ", port));
});
