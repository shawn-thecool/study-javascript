const uitls = require("./utils");
const fs = require("fs");
const path = require("path");
const templates = require('./templates');


// Day - 1
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
// console.log("info", {
//   args,
//   argsAsList,
//   argsAsObj,
//   cli: argsAsObj["cli"],
//   path: argsAsObj["path"],
//   filename: argsAsObj["filename"]
// });

// Day - 2
const UTF8 = "utf-8";
const TARGET_FILENAME = "test.json";

const targetFilePath = path.resolve(__dirname, TARGET_FILENAME);

console.log("fs", fs.readFileSync(targetFilePath, UTF8));

// 1 dirPath
// 2 filename
// 3 writefilePath = path.resolve(dirPath, filename)
// 4 encode check
// 5 content -> string json..

// 나는 디렉토리를 만들고 싶어 fs.mkdirSync(path)
// 귿네 그 디렉토가 있는지 확인은 해야대 fs.existsSync(path) - true/false

const dirPath = "container";
const filename = `${Math.random()}test.txt`;
const fileContent = "왜 날 이렇게 힘들게 하는거니?";

const mkdirPath = path.resolve(__dirname, dirPath);
const writeFilePath = path.resolve(mkdirPath, filename);

// !fs.existsSync(mkdirPath) &&
//   fs.mkdirSync(mkdirPath) &&
// !fs.existsSync(writeFilePath) &&
//   fs.writeFileSync(writeFilePath, fileContent, UTF8);

// file - custom utils
// const readFile = $path => !fs.existsSync($path) && fs.readFileSync($path, UTF8);

const createDir = $path => !fs.existsSync($path) && fs.mkdirSync($path);

const createFile = ($path, content) =>
  !fs.existsSync($path) && fs.writeFileSync($path, content, UTF8);

const createUnit = async ($path, name) => {
  const unitname = `${Math.random()}_${name}`;
  const unitpath = path.resolve($path, unitname);

  await createDir(unitpath);
  await createDir(path.resolve(unitpath, "images"));
  await createFile(path.resolve(unitpath, "images", "a.png"), "");
  await createFile(path.resolve(unitpath, "images", "b.png"), "");
  await createFile(path.resolve(unitpath, "index.js"), "");
  await createFile(path.resolve(unitpath, "index.html"), "");
  await createFile(path.resolve(unitpath, "index.css"), "");
  await createFile(path.resolve(unitpath, "data.json"), "");
  await createFile(path.resolve(unitpath, "config.json"), "");
};

createUnit(path.resolve(__dirname, "container"), "temp");
