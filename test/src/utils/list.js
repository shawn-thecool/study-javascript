// [{'key'':'val'}] 와 같이 배열안에 객체를 가지고 있는 형태의 리스트 관련 함수 모음
const parseListToObject = list =>
  list.reduce((base, item) => ({ ...base, ...item }), {});

module.exports = {
  parseListToObject
};
