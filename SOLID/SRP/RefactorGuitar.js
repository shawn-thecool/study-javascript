/**
 * Guitar 클래스는 고유값과 특성 정보군이 혼재하여 있다.
 * 특정 정보군에 변화가 일어나게 된다면 Guitar 라는 클래스 내부를 수정해야 한다는 부담이 발생한다.
 * 이 경우 SRP(단일책임원칙)의 대상이 된다.
 * 
 * --- 적용
 *
 * 1. 고유값과 특정 정보군이 혼재하지 않도록 변동되는것과 고유한것을 엄격하게 구분한다.
 * 2. 특정 정보군에 변화가 일어나게 되더라도 Guitar라는 클래스에는 변동이 없도록 변동되는 스팩을 클래스로 따로 뺀다.
 * 3. Guitar 는 기타에 대한 책임만 지고, GuitarSpec은 Guitar 스팩에 대한 책임만 지도록 한다.
 * 
 * --- 결론
 * 
 * 특정 정보군에 변화가 일어나도 변화가 일어나는 클래스만 수정하면 다른 클래스에는 영향을 주지 않는다.
 * 관심을 분리하고 변화나 문제가 발생하면 수정하면 되기 때문에 매우 깔끔해지는것을 느낄 수 있다.
 * 
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

class Guitar {
  constructor(props) {
    // 고유값
    this.serialNumber = props.serialNumber;
    this.spec = props.spec;
  }
}

class GuitarSpec {
  constructor(props) {
    this.price = props.price;
    this.maker = props.maker;
    this.stringCount = props.stringCount;
    this.woodType = props.woodType;
  }
}

const guitarSpec = new GuitarSpec({
  price: 300,
  maker: "shawn",
  stringCount: 6,
  woodType: "oak"
});

const guitar = new Guitar({
  serialNumber: "ABC1234DEF5678",
  spec: guitarSpec
});

console.log(guitar);

module.exports = {
  Guitar,
  GuitarSpec
};
