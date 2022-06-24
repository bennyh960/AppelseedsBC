const { Schema, model } = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,

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
    minLength: 4,
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

// add functions to User

// func1 : invoke every time user create or modified password (before user.save())
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
    console.log("Password encryption done");
  }
  next();
});

// func2 : invoke when user try to login - post methode user/login
userSchema.statics.findByCredentials = async (model, email, password) => {
  const user = await model.findOne({ email });
  if (!user) throw new Error("Enable to login (wrong email)");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new Error("Enable to login (wrong password)");
  console.log("Login succesfuly");
  return user;
};

// func 3 : generate authotoken
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "thisismynewcourse");
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

const User = model("user", userSchema);

module.exports = User;
