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
  saveTask(tasks);
};

const updateTask = function (title, description) {
  //get old tasks
  const tasks = getTasks();
  //check exist task
  // const foundedTask = tasks.find((item) => {
  //   return item.title == title;
  // });
  // if (foundedTask) return;
  //add task
  // const task = { title, description };
  // tasks.push(task);
  tasks.forEach((item, index) => {
    if (item.title == title) {
      tasks[index] = { title: item.title, description: description };
    }
  });
  saveTask(tasks);
};

const saveTask = function (tasks) {
  const tasksJSON = JSON.stringify(tasks);
  //write file
  fs.writeFileSync("tasks.json", tasksJSON);
};

const removeTask = function (title) {
  const tasks = getTasks();
  const index = tasks.findIndex((item) => {
    return item.title === title;
  });
  if (index !== -1) {
    tasks.splice(index, 1);
    saveTask(tasks);
  }
};

const listAllTasks = function () {
  const tasks = getTasks();

  tasks.forEach((item) => {
    console.log("item", item);
  });
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

const detailTasl = function (title) {
  //get old tasks
  const tasks = getTasks();
  //check exist task
  const foundedTask = tasks.find((item) => {
    return item.title == title;
  });
  console.log("detail: ", foundedTask);
};

module.exports = {
  addTask,
  removeTask,
  listAllTasks,
  updateTask,
  detailTasl,
};
