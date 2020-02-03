const uitls = require("./utils");

// node src
console.log("hello world");

// const
const env = process.env;
const argv = process.argv;
const args = uitls.process.getArgs(2);
const argsAsList = uitls.array.parseArrayToListWithSpliter(args, "=");
const argsAsObj = uitls.list.parseListToObject(argsAsList);

// set
uitls.process.setEnvProp("NODE_ENV", "dev");

// log
console.log("info", {
  args,
  argsAsList,
  argsAsObj,
  cli: argsAsObj["cli"],
  path: argsAsObj["path"],
  filename: argsAsObj["filename"]
});
