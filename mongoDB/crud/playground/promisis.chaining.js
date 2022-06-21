require("../src/db/mongoose");
const User = require("../src/db/moduls/users");

// * with promisis chaining
// User.findByIdAndUpdate("62b04e6d604c1e3dd4902ec8", { age: 30 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 30 });
//   })
//   .then((res) => {
//     console.log("Count :", res);
//   })
//   .catch((e) => console.log(e));

// User.findByIdAndDelete(id);
// *with async await
const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age }, { new: true });
  const count = await User.countDocuments({ age });
  //   console.log(user, count);
  return count;
};

updateAgeAndCount("62b04a65d98408037c4ca336", 12)
  .then((c) => console.log(c))
  .catch((e) => console.log(e));
