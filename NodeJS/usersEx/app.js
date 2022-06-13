// const fs = require("fs");
import fs from "fs";
import uniqid from "uniqid";

// fs.writeFileSync("x.txt", "aaa");

const loadUsers = () => {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    const dataJSON = dataBuffer.toString();
    const data = JSON.parse(dataJSON);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// *add
const add = (newUser) => {
  const users = loadUsers();
  const duplicateUsers = users.filter((u) => u.email === newUser.email);
  if (duplicateUsers.length === 0) {
    users.push({ ...newUser, id: uniqid() });
    // console.log(users);
    save(users);
  } else {
    console.log("email is a already exist");
  }
};

// console.log();
// loadUsers();
// add({ name: "Mob", email: "mob@example.com" });

//* delete
const deleter = (id) => {
  const users = loadUsers();
  const usersFiltered = users.filter((u) => u.id !== id);
  if (users.length !== usersFiltered.length) {
    save(usersFiltered);
    console.log("user id", id, "deleted");
  } else {
    console.log("no user with that ");
  }
};

const save = (users) => {
  const dataJson = JSON.stringify(users);
  fs.writeFileSync("users.json", dataJson);
};

// deleter(1);

// * update
const updateUser = (id, name, email) => {
  const users = loadUsers();
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    const updatedUser = { ...users[userIndex], name, email };
    users[userIndex] = updatedUser;
    save(users);
  } else {
    console.log("no such user");
  }
};

updateUser("km06y8l4cm27vw", "Moshe", "bkjs@sa.com");
