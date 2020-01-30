const uitls = require("./utils");

// node src
console.log("hello world");

// const
const env = process.env;
const argv = process.argv;
const args = uitls.p.getArgs(2);
const argsAsList = uitls.a.parseArrayToListWithSpliter(args, "=");
const argsAsObj = uitls.l.parseListToObject(argsAsList);

// set
uitls.p.setEnvProp("NODE_ENV", "dev");

// log
console.log("info", {
  args,
  argsAsList,
  argsAsObj,
  cli: argsAsObj["cli"],
  path: argsAsObj["path"],
  filename: argsAsObj["filename"]
});
