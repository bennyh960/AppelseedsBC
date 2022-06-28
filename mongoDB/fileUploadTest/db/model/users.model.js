const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    avatar: Buffer,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
