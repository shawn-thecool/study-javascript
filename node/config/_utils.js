const getDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  return `${year}${month}${date}`;
};
const replaceAll = (str, asis, tobe) => {
  const regex = new RegExp(asis, "g");
  return str.replace(regex, tobe);
};

console.log(getDate());
