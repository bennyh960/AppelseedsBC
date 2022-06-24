const { Router } = require("express");
const chalk = require("chalk");
const { getUsers, createUser, loginUser, editUser } = require("../controller/users.control.js");

const router = new Router();

router.get("/users", getUsers);
router.post("/users", createUser);
router.post("/users/login", loginUser);
router.patch("/users/:id", editUser);

module.exports = router;
