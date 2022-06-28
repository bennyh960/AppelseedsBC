// const express = require("express");
const { Router } = require("express");
const chalk = require("chalk");
const User = require("../db/moduls/users");
const auth = require("../middelware/auth.js");
const sharp = require("sharp");
const multer = require("multer");
const router = new Router();

// ******** SIGN IN  *************
router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);

    // ---
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    // console.log(chalk.yellow(error.message));
    res.status(400).send(error.message);
    console.log(chalk.red(error.message));
  }
});

// ******** SIGN IN LOGIN *************
router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error.message);
    console.log(chalk.red(error.message));
  }
});
// **************************

// * Loggin Out
router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token);
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send();
  }
});

router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send();
  }
});

// We dont want to allow connect users to be exposed to others data
// i let this func to remain just for learning
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (e) {
    // console.log(chalk.red(e.message));
    res.status(500).send(e.message);
  }
});

router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
});

router.get("/users/:userID", async (req, res) => {
  //   User.find({ _id: req.params.userID }) // return array with the found obj

  try {
    const user = await User.findById(req.params.userID);
    if (!user) {
      // console.log(chalk.red.inverse("Error:User not found"));
      return res.status(404).send("Error:User not found");
    }
    res.send(user);
  } catch (error) {
    // console.log(chalk.red(error.message));
    res.status(500).send(error.message);
  }
});

// router.patch("/users/:id", async (req, res) => {
router.patch("/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdateArray = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) => {
    return allowedUpdateArray.includes(update);
  });

  if (!isValidOperation) {
    console.log(chalk.yellow.inverse("Error: invalid property update."));
    return res.status(400).send(`Error : Invalid Update (property issue) check ${updates}`);
  }

  try {
    // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    // In order to insert midelware we change the code above into next 3 line of code
    // const user = await User.findById(req.params.id);
    const user = req.user;
    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();

    // not rellevant due to it just loged in (auth)
    // if (!user) {
    //   return res.status(404).send("User not found");
    // }
    res.send(user);
  } catch (error) {
    // console.log(chalk.red(error.message));
    res.status(404).send(error.message);
  }
});

// router.delete("/users/:id",auth, async (req, res) => {
// const user = await User.findByIdAndDelete(req.params.id);
router.delete("/users/me", auth, async (req, res) => {
  try {
    // const user = await User.findByIdAndDelete(req.user._id);
    // if (!user) {
    //   return res.status(404).send("User not found");
    // }

    await req.user.remove();

    res.send(req.user);
  } catch (error) {
    console.log(chalk.red(error.message));
    res.status(500).send();
  }
});

// * UPLOAD WITH MULTER

const upload = multer({
  // dest: "avatars", // if we want save in file system  (if we want store on our db we must cancle it)
  limits: {
    fileSize: 1e6,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      cb(new Error("Please upload an image with max size of 1MB"));
    }
    cb(undefined, true); //accept the upload
  },
});

// router.post("/users/me/avatar", upload.single("avatar"), (req, res) => {
// ? for error handling express func get 3 args where the last is for error handling
router.post(
  "/users/me/avatar",
  auth,
  upload.single("avatar"),
  async (req, res) => {
    // * if we dont want modify pic
    // req.user.avatar = req.file.buffer;

    // * if we  want modify pic using sharp libary
    const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer();
    req.user.avatar = buffer;

    await req.user.save();

    //option 1 on client side we cant text this (option 2 see get methode)
    // `<img src={data:image/jpg;base64,${req.file.buffer}} />`;
    res.send("Ok");
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

//* delete image
router.delete("/users/me/avatar", auth, async (req, res) => {
  req.user.avatar = undefined;
  await req.user.save();
  res.status(200).send("Image deleted");
});

//* Get User avatar
router.get("/users/:id/avatar", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user || !user.avatar) {
      throw new Error();
    }

    res.set("Content-Type", "image/png");
    res.send(user.avatar);
    // option 2 on client side : <img src="http://localhost:3000/users/userID/avatar" />
    //example userID = 62ba0fb908e77757705f127e
  } catch (error) {
    res.status(400).send();
  }
});

module.exports = router;
