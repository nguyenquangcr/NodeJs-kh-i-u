const yargs = require("yargs");

let argv = yargs
  .option({
    a: {
      demand: true,
      describe: "Enter the address",
      string: true,
      alias: "address",
    },
  })
  .help()
  .alias("help", "h").argv;

console.log("Your input is: ", argv.address);
