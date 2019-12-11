/**
 * Guitar 클래스는 고유값과 특성 정보군이 혼재하여 있다.
 * 특정 정보군에 변화가 일어나게 된다면 Guitar 라는 클래스 내부를 수정해야 한다는 부담이 발생한다.
 * 이 경우 SRP(단일책임원칙)의 대상이 된다.
 */

class Guitar {
  constructor(props) {
    // 고유값
    this.serialNumber = props.serialNumber;
    // 특정 정보군
    this.price = props.price;
    this.maker = props.maker;
    this.stringCount = props.stringCount;
    this.woodType = props.woodType;
  }
}

const guitar = new Guitar({
  serialNumber: "ABC1234DEF5678",
  price: 300,
  maker: "shawn",
  stringCount: 6,
  woodType: "oak"
});

console.log(guitar);

module.exports = Guitar;
