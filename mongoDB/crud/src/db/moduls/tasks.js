const mongoose = require("mongoose");
const chalk = require("chalk");

const taskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // in order to conect relation between 2 models we must call it in same name
    },
  },
  { timestamps: true }
);

taskSchema.pre("save", async function (next) {
  const task = this;
  if (task.isModified("complete")) {
    console.log(chalk.green(`task completion update from ${task.complete} to ${!task.complete}`));
  }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
