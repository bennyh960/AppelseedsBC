const tasks = {
  tasks: [
    {
      text: "Moshe Shoping",
      completed: true,
    },
    {
      text: "Clean yard",
      completed: false,
    },
    {
      text: "Film course",
      completed: false,
    },
  ],
  getTaskToDo() {
    const taskToDo = this.tasks.filter((task) => {
      return task.completed === false;
    });
    return taskToDo;
  },
};

console.log(tasks.getTaskToDo());
