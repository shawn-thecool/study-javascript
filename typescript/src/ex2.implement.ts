// clock 의 생성자 벨류를 지정한다
interface ClockConstructor {
  new(
    hour: number,
    minute: number
  ): ClockInterface
}
// clock 의 method 
interface ClockInterface {
  tick(): void
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log('DigitalClock : beep beep')
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log('AnalogClock : tick tock')
  }
}

const digital = createClock(DigitalClock, 7, 21)
const analog = createClock(AnalogClock, 7, 21)

console.log('ex2.implment test11')
digital.tick()
analog.tick()