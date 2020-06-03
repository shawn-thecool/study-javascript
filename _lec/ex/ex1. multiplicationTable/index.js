/**
 * multiplication table : 구구단
 * three times table  : 3단
 */

function createMultiplicationTable(timesTable) {
  let list = [];
  for (var x = 1; x < 10; x++) {
    list.push(timesTable + "*" + x + "=" + timesTable * x);
  }
  return list;
}

function create99Dan(max) {
  let list = [];
  for (var x = 1; x < max + 1; x++) {
    list.push(createMultiplicationTable(x));
  }
  return list;
}

var mt3 = createMultiplicationTable(3);
console.log(mt3);

var mt99 = create99Dan(9);
console.log(mt99);
