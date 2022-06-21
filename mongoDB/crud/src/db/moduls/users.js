const mongoose = require("mongoose");
const validator = require("validator");

// mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
//   useNewUrlParser: true,
//   useCreateIndex: true,
// });

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validae(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password cannot contain 'password'");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    // min: [12, "kids not allowed "],
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be positive number");
      }
    },
  },
});

module.exports = User;

// const me = new User({
//   name: "   Charls levi asus",
//   email: "      CHARLS@gmail.com  ",
//   password: "password",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((err) => {
//     console.log("Error!", err);
//   });
