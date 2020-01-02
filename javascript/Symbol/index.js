// 심볼(symbol)은 ES6에서 새롭게 추가된 7번째 타입으로 변경 불가능한 원시 타입의 값이다.
// 심볼은 주로 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키(property key)를 만들기 위해 사용한다.

let mySymbol = Symbol(); // new 연산자를 사용하지 않는다.

console.log(mySymbol); // Symbol()
console.log(typeof mySymbol); // symbol

let mySymbolWithDesc = Symbol("desc"); // Symbol 에 어떠한 영향도 주지 않음 - 설명용 순수 디버깅용

console.log(mySymbolWithDesc); // Symbol(desc)
console.log(mySymbolWithDesc === Symbol("desc")); // false

const obj = {};
let objKeySymbol = Symbol("obj-key");

obj[objKeySymbol] = 123;

console.log(obj); // { [Symbol(obj-key)]: 123 }
console.log(obj[objKeySymbol]); // 123

// ** Symbol 객체에서 prototype 과 length 를 제외한 나머지 부분을 well-known symbol 이라고 부른다.
// Well-Known Symbol은 자바스크립트 엔진에 상수로 존재하며 자바스크립트 엔진은 Well-Known Symbol을 참조하여
// 일정한 처리를 한다. 예를 들어 어떤 객체가 Symbol.iterator를 프로퍼티 key로 사용한 메소드 가지고 있으면
// 자바스크립트 엔진은 이 객체가 이터레이션 프로토콜을 따르는 것으로 간주하고 이터레이터로 동작하도록 한다.

// Symbol.iterator를 프로퍼티 key로 사용하여 메소드를 구현하고 있는 빌트인 객체(빌트인 이터러블)는 아래와 같다.
// 아래의 객체들은 이터레이션 프로토콜을 준수하고 있으며 이터러이터를 반환한다.

/**
 * 
  Array
  Array.prototype[Symbol.iterator]

  String
  String.prototype[Symbol.iterator]

  Map
  Map.prototype[Symbol.iterator]

  Set
  Set.prototype[Symbol.iterator]

  DOM data structures
  NodeList.prototype[Symbol.iterator] HTMLCollection.prototype[Symbol.iterator]

  arguments
  arguments[Symbol.iterator]
 * 
 */

const iterableArray = [1, 2, 3];
const iteratorArray = iterableArray[Symbol.iterator]();
console.log(iteratorArray.next());
console.log(iteratorArray.next());
console.log(iteratorArray.next());

const iterableString = "1234567890";
const iteratorString = iterableString[Symbol.iterator]();
console.log(iteratorString.next());
console.log(iteratorString.next());
console.log(iteratorString.next());
console.log(iteratorString.next());
console.log(iteratorString.next());
console.log(iteratorString.next());
console.log(iteratorString.next());
console.log(iteratorString.next());
console.log(iteratorString.next());
console.log(iteratorString.next());

const testFn = () => {
  const iterableArgs = arguments;
  const iteratorArgs = iterableArgs[Symbol.iterator]();
  console.log(iteratorArgs.next());
  console.log(iteratorArgs.next());
  console.log(iteratorArgs.next());
  console.log(iteratorArgs.next());
};

testFn(1, 2, 3, 4);


