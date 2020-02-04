const path = require("path");
const { _fs } = require("./../utils");
const projectJSON = require("./../templates/init/project.json");

const init = () => {
  const targetPath = path.resolve(__dirname, "..", "project.json");
  const content = JSON.stringify(projectJSON, null, 2);
  _fs.createFile(targetPath, content);
};

init();
