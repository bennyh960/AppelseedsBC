// Step 2 - connect to the database
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/imagesInMongoApp", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  console.log("connected to imagesInMongoApp DB");
});
