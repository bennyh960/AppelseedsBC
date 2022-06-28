const { Router } = require("express");
const multer = require("multer");
const User = require("../db/model/users.model.js");

const router = new Router();

// set up multer for file upload
const upload = multer({
  limits: {
    fileSize: 5e6,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      cb(new Error("Please upload image file bellow 5Mb"));
    }
    cb(undefined, true); // accepting upload
  },
});

// * Create New User

router.post("/users", upload.single("avatar"), async (req, res) => {
  try {
    const user = new User(req.body);
    user.avatar = req.file.buffer;
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(404).send("Error with create user");
  }
});

router.get("/users/avatar/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    // const user = await User.findById("62bae55ef49ee10f275be223");
    if (!user || !user.avatar) {
      throw new Error("Avatar not found...");
    }

    res.set("Content-Type", "image/jpg");
    res.send(user.avatar);
  } catch (error) {
    res.status(400).send();
  }
});

router.get("/users/byName/:name", async (req, res) => {
  try {
    const user = await User.findOne({ name: req.params.name });
    // const user = User.findOne({ name: "moshe" });
    // console.log(req.params.name);
    res.send(user._id.toString());
  } catch (error) {
    res.status(404).send("cant find user");
  }
});

module.exports = router;
