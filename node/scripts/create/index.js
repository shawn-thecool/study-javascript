const conf = require("./../../config");
const path = require("path");

const create = async spec => {
  try {
    const dirname = `${conf.utils.getDate()}.${spec.dirname}`;
    const dirpath = path.resolve(conf.path.ns.container, dirname);
    await conf.fs.createDir(conf.path.ns.container, dirname);
    for ({name, cont} of spec.files) await conf.fs.createFile(dirpath, name, cont);
    await console.log(`[ success ] ${dirname}`);
  } catch (err) {
    console.log(`[ error ] ${err.message}`);
  }
};

const spec = {
  dirname: "test1",
  files: [
    {
      name: "data.json",
      cont: ""
    },
    {
      name: "index.js",
      cont: ""
    },
    {
      name: "index.html",
      cont: ""
    },
    {
      name: "index.css",
      cont: ""
    },
    {
      name: "README.md",
      cont: ""
    }
  ]
};

create(spec);
