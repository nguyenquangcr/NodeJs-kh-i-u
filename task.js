const fs = require("fs");

const addTask = function (title, description) {
  //get old tasks
  const tasks = getTasks();
  //check exist task
  const foundedTask = tasks.find((item) => {
    return item.title == title;
  });
  if (foundedTask) return;
  //add task
  const task = { title, description };
  tasks.push(task);
  const tasksJSON = JSON.stringify(tasks);
  fs.writeFileSync("tasks.json", tasksJSON);
  //write file
};

const getTasks = function () {
  try {
    const taskBuffer = fs.readFileSync("tasks.json");
    const taskJSON = taskBuffer.toString();
    return JSON.parse(taskJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  addTask,
};
