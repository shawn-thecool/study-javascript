const createHTML = content => {
  const meta = content.meta || "";
  const og = content.og || "";
  const cdn = content.cdn || "";
  const css = content.style || "";
  const html = content.html || "";
  const js = content.js || "";
  return `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  ${meta}
  ${og}
  <title>Document</title>
  ${css}
  ${cdn}
</head>
<body>
  ${html}
  ${js}
</body>
</html>
`;
};
const createMeta = () => {
  return ``
};
const createOg = () => {
  return ``
};
const createCDN = () => {
  return ``
};
const createCSS = () => {
  return `*{margin:0;padding:0}`
};
const createJS = () => {
  return `<script src="text/javascript"></script>`
};
const createREADME = () => {
  return `# 새로운 프로젝트`
};
const createProjectJSON = () => {
  return `{
    "name":"temp"
  }`
};

module.exports = {
  createMeta,
  createOg,
  createCDN,
  createCSS,
  createJS,
  createHTML,
  createREADME,
  createProjectJSON
};
