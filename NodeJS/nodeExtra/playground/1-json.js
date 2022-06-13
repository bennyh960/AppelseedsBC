const { log } = require("console");
const fs = require("fs");
const book = {
  title: "Ego is the enemy",
  author: "Ryan Holiday",
};

// const bookJSON = JSON.stringify(book);

// console.log(bookJSON);

// const bookObj = JSON.parse(bookJSON);
// console.log(bookObj);

// fs.writeFileSync("1-json.json", bookJSON);
// const dataBuffer = fs.readFileSync("1-json.json");
// console.log(dataBuffer);
// console.log(dataBuffer.toString());
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

// ? Andrew Ex
const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = "benny";
data.age = 35;
console.log(data);
fs.writeFileSync("1-json.json", JSON.stringify(data));
