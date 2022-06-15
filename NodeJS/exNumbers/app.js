import express from "express";
import chalk from "chalk";

const app = express();
app.use(express.urlencoded());
app.use(express.json());

const array = [1, 2, 3, 4, 5, 6];

// const port = process.env.Port || 3000

app.get("/", (req, res) => {
  res.send(array);
});
app.post("/", (req, res) => {
  //   console.log(array.indexOf(parseInt(req.body.num)));
  const newNum = parseInt(req.body.num);
  console.log(array.indexOf(newNum));
  //   try {
  if (array.indexOf(newNum) === -1) {
    array.push(newNum);
    res.send(array);
    // res.status(400).send(newNum, " is already exsist in the array");
  } else {
    console.log(chalk.red.inverse("You so dubm it already exist"));
    res.status(400);
    res.send("You so dubm it already exist");
    //   res.status(400)(res.body.num, " is already exsist in the array");
  }
  //   } catch (error) {
  // console.log(error);
  // res.status(400).send(error);
  //   }
  //   console.log(req.body.num);
});

app.delete("/:num", (req, res) => {
  const elementNum = parseInt(req.params.num);
  if (array.indexOf(elementNum) !== -1) {
    // console.log(elementNum);
    array.splice(array.indexOf(elementNum), 1);
    console.log(chalk.green(req.params.num, " has deleted"));
    res.send(array);
  } else {
    res.status(400);
    res.send("this num not exist");
  }
});

app.put("/:num", (req, res) => {
  const elementNum = parseInt(req.params.num);
  array.splice(array.indexOf(elementNum), 1, req.body.num);
  res.send(array);
});

app.listen(3000, () => {
  console.log(chalk.green.inverse("Server is on Air"));
});
