const { urlencoded } = require("express");
const express = require("express");
// const formidable = require("formidable");
// const fs = require("fs");
// cors maybe
const fileUpload = require("express-fileupload");

const app = express();

// app.use(cors())
app.use(urlencoded({ extended: true })); //for using url-encoded
app.use(express.json());
app.use(fileUpload());

//
const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(allowCrossDomain);
//

const PORT = process.env.PORT || 5000;

app.post("/", (req, res) => {
  // if (req.files) console.log("xxx", req.files.email);
  // files is from fileUpload
  const rest = req.files.email.data;
  const b64 = rest.toString("base64");
  const mimeType = req.files.mimetype; // e.g., image/png

  res.send(`<img width=300 src="data:${mimeType};base64,${b64}" />`);
});

app.listen(PORT, () => {
  console.log("Server on air on port ", PORT);
});
