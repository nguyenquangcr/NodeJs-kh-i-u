const yargs = require("yargs");
// const { addTask } = require("./task");
const taskFunc = require("./task");

//add
yargs.command({
  command: "add",
  build: {
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
    // addTask(args.title, args.description)
    taskFunc.addTask(args.title, args.description);
  },
});

yargs.parse();
