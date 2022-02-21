const yargs = require("yargs");
const taskFunc = require("./task");

//add
yargs.command({
  command: "add",
  builder: {
    title: {
      type: "string",
      demandOption: true,
    },
    description: {
      type: "string",
      demandOption: true,
    },
  },
  handler: function (args) {
    taskFunc.addTask(args.title, args.description);
  },
});

//remove task
yargs.command({
  command: "remove",
  builder: {
    title: {
      type: "string",
      demandOption: true,
    },
  },
  handler: function (args) {
    taskFunc.removeTask(args.title);
  },
});

//update task
yargs.command({
  command: "update",
  builder: {
    title: {
      type: "string",
      demandOption: true,
    },
    description: {
      type: "string",
      demandOption: true,
    },
  },
  handler: function (args) {
    taskFunc.updateTask(args.title, args.description);
  },
});

//list all task
yargs.command({
  command: "list",
  builder: {},
  handler: function (args) {
    // taskFunc.removeTask(args.title);
    taskFunc.listAllTasks();
  },
});

//list task detail
yargs.command({
  command: "detail",
  builder: {
    title: {
      type: "string",
      demandOption: true,
    },
  },
  handler: function (args) {
    taskFunc.detailTasl(args.title);
  },
});

yargs.parse();
