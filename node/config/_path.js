const path = require("path");

const root = path.resolve(__dirname, "..");

const namespace = {
  container: path.resolve(root, "container"),
  scripts: path.resolve(root, "scripts")
};

module.exports = { ns: namespace };
