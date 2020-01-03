// Map 은 [key, value] 현태의 리스트

// Map 의 요소 추가
const map1 = new Map([
  ["a", 1],
  ["b", 2]
]);

console.log(map1); // Map { 'a' => 1, 'b' => 2 }

const map2 = new Map();

map2.set("c", 3);
map2.set("d", 4);

console.log(map2); // Map { 'c' => 3, 'd' => 4 }

// object 는 string 과 symbol 만을 key로 지정할 수 있지만,
// map 은 그 외 타입도 지정이 가능하다

const map3 = new Map();

map3.set("key", 1);
map3.set(1, 2);
map3.set(null, 3);
map3.set(undefined, 4);
map3.set(true, 5);
map3.set(false, 6);
map3.set([], 7);
map3.set({}, 8);
map3.set(Symbol(), 9);
map3.set(data => data, 1);

console.log(map3);
// Map {
//   'key' => 1,
//   1 => 2,
//   null => 3,
//   undefined => 4,
//   true => 5,
//   false => 6,
//   [] => 7,
//   {} => 8,
//   Symbol() => 9,
//   [Function] => 1 }

// Map 의 요소 삭제

const obj1 = {};
const fn1 = d => d;

const map4 = new Map([
  ["a", 1],
  ["b", 2],
  [obj1, 3],
  [fn1, 4]
]);

console.log(map4);

console.log(map4.delete("c")); // false - key 가 존재하지 않음
console.log(map4.delete("a")); // true - 삭제 하고 true 반환
// 참조타입을 키로 설정한 경우는 주의할것.
console.log(map4.delete({})); // false - 객체는 참조타입
console.log(map4.delete(d => d)); // false - 함수는 참조타입

// console.log(map4.delete(obj1)); // true
console.log(map4.delete(fn1)); // true

console.log(map4);

// map 은 기본적으로 symbol.iterator를 가지고 있음 - for of 문으로 루프 가능

const obj2 = { a: 1, b: 2, c: 3 };
console.log(obj2[Symbol.iterator]); // undefined

const map5 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3]
]);
console.log(map5[Symbol.iterator]); // [Function: entries]
for (item of map5) {
  console.log(item);
  // [ 'a', 1 ]
  // [ 'b', 2 ]
  // [ 'c', 3 ]
}

// methods - clear - map 내부를 초기화

// map5.clear()
console.log(map5); // Map {}

// methods - entries - 요소들의 iterator 를 반환

const iter = map5.entries();

console.log(iter.next()); // { value: [ 'a', 1 ], done: false }
console.log(iter.next()); // { value: [ 'b', 2 ], done: false }
console.log(iter.next()); // { value: [ 'c', 3 ], done: false }
console.log(iter.next()); // { value: undefined, done: true }

// methods - keys - key 로만 이루어진 요소들의 iterator 반환

const keyIter = map5.keys()

console.log(keyIter.next()); // { value: 'a', done: false }
console.log(keyIter.next()); // { value: 'b', done: false }
console.log(keyIter.next()); // { value: 'c', done: false }
console.log(keyIter.next()); // { value: undefined, done: true }

// methods - values - value 로만 이루어진 요소들의 iterator 반환

const valueIter = map5.values()

console.log(valueIter.next()) // { value: 1, done: false }
console.log(valueIter.next()) // { value: 2, done: false }
console.log(valueIter.next()) // { value: 3, done: false }
console.log(valueIter.next()) // { value: undefined, done: true }


// methods - forEach - 루프

map5.forEach((value, key) => {
  console.log(`${key}:${value}`);
});

// methods - get - key를 통해서 value를 반환 없다면 undefined 반환 - 참조타입의 주의
console.log(map5.get("a")); // 1
console.log(map5.get("d")); // undefined
console.log(map4.get({})); // undefined
console.log(map4.get(obj1)); // 3

// methods - has - key 검사 후 boolean 값으로 체크
console.log(map5.has("x")); // false
console.log(map5.has("a")); // true

// attr - size - 길이 반환 속성
console.log(map5.size) // 3 
