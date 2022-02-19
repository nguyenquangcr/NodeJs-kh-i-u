const yargs = require("yargs");

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
    console.log("add", args);
  },
});

yargs.parse();
