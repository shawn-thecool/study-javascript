// [1,2,3,4] 와같은 배열 함수 모음

// parse
const parseArrayToListWithSpliter = (array, spliter) => {
  return array.map(item => {
    const splitedItems = item.split(spliter);
    return { [splitedItems[0]]: splitedItems[1] };
  });
};

module.exports = {
  parseArrayToListWithSpliter
}