const { log } = require("console");
const fs = require("fs");
// *1
// fs.writeFileSync("newFile.csv", "this file created by node!!");

// *2
// fs.appendFileSync("newFile.txt", "\nthis data added to previos data");
// fs.appendFileSync("newFile.csv", "\nthis data added to previos data");
// fs.copyFileSync("newFile.txt", "./fileTest/copyNewFile.txt");

// *3
// fs.renameSync("copyNewFile.txt", "copyFile.txt");

// * 4
const fileList = fs.readdirSync("./");
console.log(fileList);
console.log(Array.isArray(fileList));

// *5 -delete file
fs.unlink("copyFile.txt", (err) => {
  if (err) {
    throw err;
  }
  console.log("im very cool man");
});
