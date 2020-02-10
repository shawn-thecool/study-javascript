const path = require("path");
const { _fs } = require("./../utils");
const { createProjectJSON } = require("./../templates");

const init = () => {
  const targetPath = path.resolve(__dirname, "..", "project.json");
  _fs.createFile(targetPath, createProjectJSON());
};

init();
