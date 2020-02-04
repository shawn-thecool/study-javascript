const path = require("path");
const { _date, _fs} = require("./../utils");
const projectJSON = require('./../project.json');

const createUnit = async ($path, unitname, config) => {
  const unitpath = path.resolve($path, unitname);
  console.log('unitpath', config.assets)
  await _fs.createDir(unitpath);
  await (config.assets) && _fs.createDir(path.resolve(unitpath, config.assets.dirname));
  (await config.indexJS) && _fs.createFile(path.resolve(unitpath, config.indexJS.filename), config.indexJS.content);
  (await config.indexHTML) && _fs.createFile(path.resolve(unitpath, config.indexHTML.filename), config.indexHTML.content);
  (await config.indexCSS) && _fs.createFile(path.resolve(unitpath, config.indexCSS.filename), config.indexCSS.content);
  (await config.dataJSON) && _fs.createFile(path.resolve(unitpath, config.dataJSON.filename), config.dataJSON.content);
  (await config.readmeMD) && _fs.createFile(path.resolve(unitpath, config.readmeMD.filename), config.readmeMD.content);
};

const createTargetPath = path.resolve(__dirname, "..", projectJSON.rootDir);
const unitname = _date.getIdWithTimestamp(projectJSON.unitDir);
const config = projectJSON.contents
console.log('config', config)


createUnit(createTargetPath, unitname, config);
