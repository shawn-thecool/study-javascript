const path = require("path");

const src = path.resolve(__dirname, "..");
const container = path.resolve(src, "container");
const templates = path.resolve(src, "templates");

module.exports = {
  src,
  container,
  templates
};
