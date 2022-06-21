const express = require("express");
const User = require("../db/moduls/users");
const router = new express.Router();

router.get("/test", (req, res) => {
  res.send("This is my router test");
});
// router.use(router);

router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.get("/users/:userID", async (req, res) => {
  //   User.find({ _id: req.params.userID }) // return array with the found obj

  try {
    const user = await User.findById(req.params.userID);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(e.message);
  }
});

router.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdateArray = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) => {
    return allowedUpdateArray.includes(update);
  });

  if (!isValidOperation) {
    return res.status(400).send(`Error : Invalid Update (property issue) check ${updates}`);
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    // console.log(user);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.send(user);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.send(user);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
