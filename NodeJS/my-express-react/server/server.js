import express from "express";
import chalk from "chalk";
// const chalk = require('chalk')
// const express = require('express')
// const axios = require('axios')
import axios from "axios";
import cors from "cors";

const app = express();

const port = process.env.port || 5000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const getWether = async (city) => {
  const { data } = await axios.get(`https://goweather.herokuapp.com/weather/${city}`);
  console.log(data.temperature);
  return data.temperature;
};

app.get("/api/:city", async (req, res) => {
  res.send(await getWether(req.params.city));
  console.log(req.params.city);
  //   getWether();
  //   res.send("xxx");
});

app.listen(port, () => {
  console.log(chalk.green.inverse("Server is on air!"));
});
