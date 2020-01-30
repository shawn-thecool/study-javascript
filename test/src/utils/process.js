// process 접근 함수 모음

// get
const getArgs = slicedBy => process.argv.slice(slicedBy);

// set
const setEnvProp = (key, value) => {
  process.env[key] = value;
};

module.exports = {
  getArgs,
  setEnvProp
};
