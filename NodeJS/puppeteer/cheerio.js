const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const PORT = 8000;

const app = express();

const url = "https://www.timeanddate.com/holidays/israel/";
axios(url)
  .then((res) => {
    const html = res.data;
    //   console.log(html);
    const $ = cheerio.load(html);
    const arr = [];

    $("tr", html).each(function () {
      const row = $(this).text();
      // const row2 = $(this).find("td").text();
      arr.push({ row });
    });

    console.log(arr);
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, () => {
  console.log("Server running on port ", PORT);
});
