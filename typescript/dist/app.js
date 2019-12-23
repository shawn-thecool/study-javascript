/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ex1.basic.ts":
/*!**************************!*\
  !*** ./src/ex1.basic.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Student =
/*#__PURE__*/
function () {
  // 맵버변수 
  // 생성자
  function Student(firstName, middleInitial, lastName) {
    _classCallCheck(this, Student);

    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.fullName = [firstName, middleInitial, lastName].join(' ');
  } // setter


  _createClass(Student, [{
    key: "setFirstName",
    value: function setFirstName(firstName) {
      this.firstName = firstName;
    } // getFullName

  }, {
    key: "getFullName",
    value: function getFullName() {
      return this.fullName;
    }
  }]);

  return Student;
}();

function greeter(person) {
  var firstName = person.firstName,
      lastName = person.lastName;
  return "Hi ".concat(firstName, " ").concat(lastName);
}

var user = new Student('shawn', 'L.', 'thecool');
console.log(greeter(user));

/***/ }),

/***/ "./src/ex1.types.ts":
/*!**************************!*\
  !*** ./src/ex1.types.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Basic Types
// boolean
var isDone = false;
console.log('boolean', {
  isDone: isDone
}); // number

var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log('number', {
  decimal: decimal,
  hex: hex,
  binary: binary,
  octal: octal
}); // string

var color = 'blue';
var fullName = 'Bob bobbington';
var sentence = "my name is ".concat(fullName, " and my voice decial is ").concat(decimal);
console.log('string', {
  color: color,
  fullName: fullName,
  sentence: sentence
}); // Array

var list = [1, 2, 3];
var genericList = [1, 2, 3];
console.log('array', {
  list: list,
  genericList: genericList
}); // Tuple

var x;
x = ['string', 0];
console.log('tuple', {
  x: x
}); // Enum - 열거형, 순차처리 with generator - iterable - 활용

var Color;

(function (Color) {
  Color[Color["Red"] = 0] = "Red";
  Color[Color["Green"] = 1] = "Green";
  Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));

var c = Color.Green;
var Color2;

(function (Color2) {
  Color2[Color2["Red"] = 1] = "Red";
  Color2[Color2["Green"] = 2] = "Green";
  Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));

var c2 = Color2.Green;
var Color3;

(function (Color3) {
  Color3[Color3["Red"] = 1] = "Red";
  Color3[Color3["Green"] = 2] = "Green";
  Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));

var c3 = Color3.Green;
console.log('enum', {
  c: c,
  c2: c2,
  c3: c3
}); // Any

var notSuer = 4;
var anyList = [1, true, "free"];
console.log('any', {
  notSuer: notSuer,
  anyList: anyList
}); // Void

function warnUSer() {
  console.log('this is my warning message');
}

var voidFn = function voidFn() {
  console.log('void fn with arrow ');
};

var u = undefined;
var n = null;
console.log('void', {
  warnUSer: warnUSer,
  voidFn: voidFn,
  u: u,
  n: n
}); // Never - 절대 재할당 되지 않음 프로세스의 끝까지 가져감

function error(message) {
  throw new Error(message);
}

function fail() {
  return error('something failed');
}

function infiniteLoop() {
  while (true) {}
} // Object
// declare function create(o: object | null): void; - ReferenceError: create is not defined
// create(null)
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
// Type assertions - 유형을 프로그래머가 알고 있다고 가정. 런타임에서 체크 하지 않음 컴파일단계에서만 사용
// let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length;


var someValue = "this is a string";
var strLength = someValue.length;
console.log('assertions', {
  someValue: someValue,
  strLength: strLength
});

/***/ }),

/***/ "./src/ex2.implement.ts":
/*!******************************!*\
  !*** ./src/ex2.implement.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// clock 의 생성자 벨류를 지정한다
// clock 의 method 
function createClock(ctor, hour, minute) {
  return new ctor(hour, minute);
}

var DigitalClock =
/*#__PURE__*/
function () {
  function DigitalClock(h, m) {
    _classCallCheck(this, DigitalClock);
  }

  _createClass(DigitalClock, [{
    key: "tick",
    value: function tick() {
      console.log('DigitalClock : beep beep');
    }
  }]);

  return DigitalClock;
}();

var AnalogClock =
/*#__PURE__*/
function () {
  function AnalogClock(h, m) {
    _classCallCheck(this, AnalogClock);
  }

  _createClass(AnalogClock, [{
    key: "tick",
    value: function tick() {
      console.log('AnalogClock : tick tock');
    }
  }]);

  return AnalogClock;
}();

var digital = createClock(DigitalClock, 7, 21);
var analog = createClock(AnalogClock, 7, 21);
console.log('ex2.implment test11');
digital.tick();
analog.tick();

/***/ }),

/***/ 0:
/*!**************************************************************************!*\
  !*** multi ./src/ex1.basic.ts ./src/ex2.implement.ts ./src/ex1.types.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/ex1.basic.ts */"./src/ex1.basic.ts");
__webpack_require__(/*! ./src/ex2.implement.ts */"./src/ex2.implement.ts");
module.exports = __webpack_require__(/*! ./src/ex1.types.ts */"./src/ex1.types.ts");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map