/**
 * Guitar 클래스는 고유값과 특성 정보군이 혼재하여 있다.
 * 특정 정보군에 변화가 일어나게 된다면 Guitar 라는 클래스 내부를 수정해야 한다는 부담이 발생한다.
 * 이 경우 SRP(단일책임원칙)의 대상이 된다.
 * 
 * --- 적용
 *
 * 1. Divergent change : 복잡도를 고려하며 책임 분할
 * 
 *    Extract Class를 통해 혼재된 각 책임을 각각의 개별 클래스로 분할하여 
 *    클래스 당 하나의 책임만을 맡도록 하는 것입니다. 여기서 관건은 책임만 분리하는 것이 아니라 
 *    분리된 두 클래스간의 관계의 복잡도를 줄이도록 설계하는 것이 중요하다.
 * 
 * 2. Shotgun surgery : 응집력 높이기
 * 
 *    Move Field와 Move Method를 통해 책임을 기존의 어떤 클래스로 모으거나
 *    이럴만한 클래스가 없다면 새로운 클래스를 만들어 해결할 수 있다.
 *    
 * --- 결론
 * 
 * 특정 정보군에 변화가 일어나도 변화가 일어나는 클래스만 수정하면 다른 클래스에는 영향을 주지 않는다.
 * 관심을 분리하고 변화나 문제가 발생하면 수정하면 되기 때문에 매우 깔끔해지는것을 느낄 수 있다.
 * 
 * --- 이슈
 * 
 * 1. 클래스 명은 명확하게, 클래스는 자신의 이름이 나타내는 일을 해야 함
 * 
 *    올바른 클래스 이름은 해당 클래스의 책임을 나타낼 수 있는 가장 좋은 방법입니다. 
 *    각 클래스는 하나의 개념을 나타내어야 합니다.
 * 
 * 2. 무조건 책임을 분리하는 것이 정답이 아니다.
 *    
 *    무조건 책임을 분리한다고 SRP가 적용되는 건 아니다.
 *    각 개체 간의 응집력이 있다면 병합이 순 작용의 수단이 되고 결합력이 있다면 
 *    분리가 순 작용의 수단이 된다.
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
