const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/upload-img-test", {
    // usefindAndModify: false,
    // useCreateIndex: true,
    autoIndex: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Mongoose connect");
  })
  .catch((e) => {
    console.log("Mongoose connecttin faild", e);
  });
