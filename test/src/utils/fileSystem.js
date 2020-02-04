const UTF8 = "utf-8";

const fs = require("fs");

const readFile = $path => !fs.existsSync($path) && fs.readFileSync($path, UTF8);

const createDir = $path => !fs.existsSync($path) && fs.mkdirSync($path);

const createFile = ($path, content) => !fs.existsSync($path) && fs.writeFileSync($path, content, UTF8);

module.exports = {
  readFile,
  createDir,
  createFile
};
