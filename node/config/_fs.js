const fs = require("fs");
const path = require("path");

const createDir = (targetPath, dirname) => {
  const dirPath = path.resolve(targetPath, dirname);
  if (fs.existsSync(dirPath)) return;
  fs.mkdirSync(dirPath);
};

const createFile = (targetPath, filename, content = "") => {
  const filePath = path.resolve(targetPath, filename);
  if (fs.existsSync(filePath)) return;
  fs.writeFileSync(filePath, content);
};

module.exports = {
  createDir,
  createFile
};
