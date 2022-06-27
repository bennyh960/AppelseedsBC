const mongoose = require("mongoose");
const validator = require("validator");
const chalk = require("chalk");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Task = require("./tasks.js");

// mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
//   useNewUrlParser: true,
//   useCreateIndex: true,
// });

// *
const userSchema = new mongoose.Schema({
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
  tokens: [
    {
      token: {
        type: String,
        require: true,
      },
    },
  ],
});

// *virtual - relation betwwn user and tasks
userSchema.virtual("tasks", {
  ref: "Task",
  localField: "_id",
  foreignField: "owner",
});

// * show public data
// userSchema.methods.getPublicProfile = function () {
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

// * func for token generate
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "thisismynewcourse");
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

// * static func for credntials
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Enable to login (wrong email)");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Enable to login (wrong password)");
  }
  console.log(chalk.green.inverse("Login succesfuly"));
  return user;
};

// here we cant use arror function as callback due to this issue
// * Hash the plain text password before saving
userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    console.log(chalk.yellow.inverse("Password encryption done"));
    user.password = await bcrypt.hash(user.password, 8);
  }

  next(); //make sure next call inorder midlaware continue to next opertaion
});

// * Delete task when user is removed
userSchema.pre("remove", async function (next) {
  const user = this;
  await Task.deleteMany({ owner: user._id });
  next();
});

const User = mongoose.model("User", userSchema);

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
