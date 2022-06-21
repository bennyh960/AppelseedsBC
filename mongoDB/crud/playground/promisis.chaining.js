require("../src/db/mongoose");
const User = require("../src/db/moduls/users");

User.findByIdAndUpdate("62b04e6d604c1e3dd4902ec8", { age: 30 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 30 });
  })
  .then((res) => {
    console.log("Count :", res);
  })
  .catch((e) => console.log(e));
