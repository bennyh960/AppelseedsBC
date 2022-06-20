const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Email is invalid");
//       }
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 7,
//     validae(value) {
//       if (value.toLowerCase().includes("password")) {
//         throw new Error("Password cannot contain 'password'");
//       }
//       //   if (!validator.isStrongPassword(value)) {
//       //     throw new Error("Password wrong");
//       //   }
//     },
//   },
//   age: {
//     type: Number,
//     default: 0,
//     // min: [12, "kids not allowed "],
//     validate(value) {
//       if (value < 0) {
//         throw new Error("Age must be positive number");
//       }
//     },
//   },
// });

// const me = new User({
//   name: "   Charls levi asus",
//   email: "      CHARLS@gmail.com  ",
//   password: "password",
// });
// ?=========================================
const Tasks = mongoose.model("Tasks", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
});
const myTask = new Tasks({
  description: "     Eat a lot",
  //   complete: true,
});

myTask
  .save()
  .then(() => {
    console.log(myTask);
  })
  .catch((err) => {
    console.log("Error!", err);
  });
