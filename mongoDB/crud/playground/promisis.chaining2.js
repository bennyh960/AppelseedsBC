require("../src/db/mongoose");

const Task = require("../src/db/moduls/tasks");

// Task.findByIdAndDelete("62b04bdf8a62e82f08e610ac")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ complete: false });
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => console.log(e));

const findTaskAndDelete = async (id) => {
  const taskTodelete = await Task.findByIdAndDelete(id);
  const count = Task.countDocuments({ complete: false });
  console.log(taskTodelete);
  return count;
};

findTaskAndDelete("62b04c26a3c943412420331f")
  .then((c) => console.log("count: ", c))
  .catch((e) => console.log(e));
