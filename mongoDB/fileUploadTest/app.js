// Step 1 - set up express & mongoose
const express = require("express");
const buffer = require("node:buffer");
const cors = require("cors");
const chalk = require("chalk");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
const multer = require("multer");

const imgModel = require("./db/model/images.model.js");

const fs = require("fs");
const path = require("path");
require("dotenv/config");
require("./db/mongoose");

const app = express();
//

const fileStorageEngine = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./db/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});
const upload = multer({
  storage: fileStorageEngine,
  fileFilter: function (req, file, cb) {
    console.log(file.mimetype);
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
      cb(null, true);
    } else {
      console.log("supprted in png or jpg only");
      cb(null, false);
    }
  },
  // limits: {
  //   fileSize: 1024 * 1024 * 2,
  // },
});

//

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Step 7 - the GET request handler that provides the HTML UI
app.get("/", async (req, res) => {
  try {
    const img = await imgModel.findById("62b89ba32404e0545070e881");
    // console.log("img sending", img);
    res.send(img);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
// ! need to add logic
// app.post("/", upload.single("image"), async (req, res) => {
//   console.log("benn", req.file);
//   const img = new imgModel({ name: "benny" });
//   if (req.file) {
// console.log("xxxxxxxxxxxxxxxxx");
//     img.avatar = req.file.path;
//   }
//   await img.save();
//   res.send("cool");
// });
app.post("/", upload.single("image"), async (req, res) => {
  const img = fs.readFileSync(req.file.path);
  const encode_img = img.toString("base64");
  // console.log(chalk.green.inverse(encode_img));
  const final_img = {
    contentType: req.file.mimetype,
    data: new buffer.Buffer.from(encode_img, "base64"),
  };
  const imgUpload = await new imgModel({
    name: req.file.filename,
    img: final_img,
  });
  imgUpload.save();
  console.log(chalk.yellow.inverse("Size of file stored: ", buffer.Buffer.byteLength(img)));
  console.log("Saved To database");
  res.contentType(final_img.contentType);
  res.send(final_img.image);
});
app.post("/multy", upload.array("images", 3), async (req, res) => {
  console.log("benn", req.files);
  res.send("cool");
});

// Step 9 - configure the server's port

var port = process.env.PORT || "5000";
app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server listening on port", port);
});
