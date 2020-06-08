const arr = [
  [0, 0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 0, 0],
  [1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 1, 0],
];

const arr2 = [
  [0, 0, 1, 0, 0],
  [0, 1, 0, 1, 0],
  [1, 0, 0, 0, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0],
];
const arr3 = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

const arr4 = [
  [1, 0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0, 0],
  [1, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 1, 0],
  [1, 0, 1, 1, 0, 1],
  [0, 1, 0, 0, 1, 0],
];

//                     pprevline[a.index - (rowcount*2)]
//                     prevline[a.index - rowcount]
//  sameline[a.index-1]             a              sameline[a.index + 1]
//                     nextline[a.index + rowcount]
//                     nextline[a.index + rowcount *2]

// 1. prevline true && nextline true
// 2. 북동남서 로 검색을 시작

// target 에서 시작
// 대칭인 배열을 찾는다.
// 다음 라인에서 2개의 1 을 찾는다 처음과 끝이
// 다음 라인에서 2개 의 1을 찾는다 처음과 끝이
//

// utils
const equal = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const checkRow = (arr, size) => {
  if (arr.length !== 2 + size) return; // 홀수 길이 체크
  if (arr.reduce((a, b) => a + b, 0) !== 2) return; // 합계 체크
  if (arr[0] !== 1) return; // 첫번째 값 체크
  if (arr.reverse()[0] !== 1) return; // 마지막 값 체크
  return arr;
};
const getColumnByIdx = (matrix, idx) =>
  matrix.reduce((a, b) => a.concat(b[idx]), []);

const search = (matrix) => {
  let cnt = 0;

  matrix.map((row, ri) => {
    row.map((target, ti) => {
      // 1. target 이 0 이면,
      if (target) return;

      // 공역 target 이 1인지 체크
      if (!matrix[ri - 1]) return;
      if (matrix[ri - 1][ti] !== 1) return;
      if (ri === 0) return;
      if (ti === 0) return;
      if (ri === row.length - 1) return;
      if (ti === row.length - 1) return;

      // 세로축에서 1 인 target을 검색
      const c = getColumnByIdx(matrix, ti);
      const size = c.slice(ri).join("").indexOf("1");
      if (size < 1) return;
      if (size % 2 !== 1) return;

      const center = Math.floor(size / 2);
      let isDiamond = true;
      let tick = 0;
      let e = 1;
      let k = 1;

      while (tick < size) {

        if (!checkRow(matrix[ri + tick].slice(ti - k, ti + k + 1), e)) {
          isDiamond = false;
          break;
        }

        if (tick < center) {
          e += 2;
          k += 1;
        } else {
          e -= 2;
          k -= 1;
        }
        tick += 1;
      }

      if (isDiamond) {
        cnt += 1;
      }
    });
  });

  return cnt;
};

console.log("search(arr)", search(arr));
console.log("search(arr2)", search(arr2));
console.log("search(arr3)", search(arr3));
console.log("search(arr4)", search(arr4));
