const mongoose = require("mongoose");
const chalk = require("chalk");

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  createdDate: {
    type: String,
    default: new Date(),
  },
});

taskSchema.pre("save", async function (next) {
  const task = this;
  if (task.isModified("complete")) {
    console.log(chalk.green(`task completion update from ${task.complete} to ${!task.complete}`));
  }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
