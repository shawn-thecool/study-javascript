// Basic Types

// boolean
let isDone: boolean = false;
console.log('boolean', { isDone })

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744
console.log('number', { decimal, hex, binary, octal })

// string
let color: string = 'blue';
let fullName: string = 'Bob bobbington'
let sentence: string = `my name is ${fullName} and my voice decial is ${decimal}`
console.log('string', { color, fullName, sentence })

// Array
let list: number[] = [1, 2, 3]
let genericList: Array<number> = [1, 2, 3]
console.log('array', { list, genericList })

// Tuple
let x: [string, number];
x = ['string', 0]
console.log('tuple', { x })

// Enum - 열거형, 순차처리 with generator - iterable - 활용
enum Color { Red, Green, Blue }
let c: Color = Color.Green
enum Color2 { Red = 1, Green, Blue }
let c2: Color2 = Color2.Green
enum Color3 { Red = 1, Green = 2, Blue = 4 }
let c3: Color3 = Color3.Green
console.log('enum', { c, c2, c3 })

// Any
let notSuer: any = 4;
let anyList: any[] = [1, true, "free"]
console.log('any', { notSuer, anyList })

// Void
function warnUSer(): void {
  console.log('this is my warning message')
}
let voidFn = (): void => {
  console.log('void fn with arrow ')
}
let u: undefined = undefined
let n: null = null
console.log('void', { warnUSer, voidFn, u, n })

// Never - 절대 재할당 되지 않음 프로세스의 끝까지 가져감
function error(message: string): never {
  throw new Error(message)
}
function fail() {
  return error('something failed')
}
function infiniteLoop(): never {
  while (true) {

  }
}

// Object
// declare function create(o: object | null): void; - ReferenceError: create is not defined

// create(null)

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

// Type assertions - 유형을 프로그래머가 알고 있다고 가정. 런타임에서 체크 하지 않음 컴파일단계에서만 사용
// let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length;
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
console.log('assertions', { someValue, strLength })

