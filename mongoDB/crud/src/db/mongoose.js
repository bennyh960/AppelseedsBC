const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  usefindAndModify: false,
  useCreateIndex: true, //make this true
  autoIndex: true,
  useNewUrlParser: true,
});
console.log("Mongoose connect");
