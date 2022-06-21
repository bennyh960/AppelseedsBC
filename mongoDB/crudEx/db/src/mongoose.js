const mongoose = require("mongoose");

// * Create connection to DB
mongoose.connect("mongodb://127.0.0.1:27017/ecommerc-site2", {
  useNewUrlParser: true,
  useCreateIndex: true,
});
console.log("Mongoose connect to ecommerc-site2");
