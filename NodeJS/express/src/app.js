const express = require("express");
const path = require("path");

// manioulation how to get to index.html
// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, "../public/index.html"));

const publicDirPath = path.join(__dirname, "../public");
const app = express();

//a way to customize the server - will talk more about it later
app.use(express.static(publicDirPath));

// ! will not run if app.use(expres.static()) invlked
// app.get("", (req, res) => {
//   res.send("Hello express perfect!");
// });
// app.get("/help", (req, res) => {
//   res.send([
//     {
//       name: "benny",
//       age: "30",
//     },
//     {
//       name: "Menny",
//       age: "39",
//     },
//   ]);
// });
// app.get("/about", (req, res) => {
//   res.send("<h1>About page</h1>");
// });

//app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
