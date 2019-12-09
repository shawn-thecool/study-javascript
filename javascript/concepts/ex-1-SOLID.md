# 객체지향 개발 5대 원리: SOLID

```text
S.O.L.I.D. STANDS FOR:

S — Single responsibility principle
O — Open closed principle
L — Liskov substitution principle
I — Interface segregation principle
D — Dependency Inversion principle
```

> _[SOLID](http://www.nextree.co.kr/p6960/): 컴퓨터 프로그래밍에서 SOLID란 로버트 마틴이 2000년대 초반에 명명한 객체 지향 프로그래밍 및 설계의 다섯 가지 기본 원칙을 마이클 페더스가 두문자어 기억술로 소개한 것입니다. 프로그래머가 시간이 지나도 유지 보수와 확장이 쉬운 시스템을 만들고자 할 때 이 원칙들을 함께 적용할 수 있습니다. SOLID 원칙들은 소프트웨어 작업에서 프로그래머가 소스 코드가 읽기 쉽고 확장하기 쉽게 될 때까지 소프트웨어 소스 코드를 리팩토링하여 코드 냄새를 제거하기 위해 적용할 수 있는 지침입니다. 이 원칙들은 애자일 소프트웨어 개발과 적응적 소프트웨어 개발의 전반적 전략의 일부입니다._

_SOLID 원칙은 중요하나 고객의 만족이 우선입니다_

- 여러분의 소프트웨어가 고객이 원하는 기능을 하도록 하세요.
- 객체지향 기본원리를 적용해서 소프트웨어를 유연하게 하세요.
- 유지보수와 재사용이 쉬운 디자인을 위해 노력하세요.

## 참조

- [nextree](http://www.nextree.co.kr/p6960/)
- [medium.com/@cramirez92](https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa)

## SRP

_단일책임의 원칙: Single Responsibility Principle_

### 정의

작성된 함수는 하나의 기능만 가지며 함수가 제공하는 모든 메서드는 하나의 책임을 수행하는데 집중 되어야 합니다.

- 여러 원인에 의한 변경 (Divergent change): Extract 함수를 통해 혼재된 각 책임을 각각의 개별 함수로 분할하여 함수 당 하나의 책임만을 맡도록 하는 것입니다. 여기서 관건은 책임만 분리하는 것이 아니라 분리된 두 함수간의 관계의 복잡도를 줄이도록 설계하는 것입니다. 따라서 각각의 함수들의 유사한 책임들은 부모에게 명백히 위임하고 다른 책임들은 각자에게 정의할 수 있습니다.

- 산탄총 수술(Shotgun surgery): Move Field와 Move Method를 통해 책임을 기존의 어떤 함수로 모으거나, 이럴만한 함수가 없다면 새로운 함수를 만들어 해결할 수 있습니다. 즉 산발적으로 여러 곳에 분포된 책임들을 한 곳에 모으면서 설계를 깨끗하게 합니다. 즉 응집성을 높이는 작업입니다.

### 기대

1. 가독성 향상
2. 유지보수 용이
3. 다른 원리들을 적용하는 기초 과정

### 적용

#### 적용전

```javascript
function Cartoon(opt) {
  this.id = "a1234bje1";
  this.price = opt.price;
  this.author = opt.author;
  this.genre = opt.genre;
  this.title = title;
}
```

> Cartoon.id는 시리얼 넘버의 역할을 하고 있음으로 Cartoon으로 생성된 인스턴스의 아이디 역할을 수행하게 됨으로 고유의 값입니다. 하지만 나머지 부분은 Cartoon의 변경가능한 요소들로 이루어져 있음으로, 분리하여 단일 책임을 부여하는 것이 옳습니다.

#### 적용후

```javascript
function Cartoon(spec) {
  this.id = "a1234bje1"; // 시리얼 넘버
  this.spec = spec;
}
function CartoonSpec(opt) {
  this.opt = opt || {};
  this.price = this.opt.price || 0;
  this.author = this.opt.author || "";
  this.genre = this.opt.genre || "";
  this.title = this.opt.title || "";
}
```

> 이제 사용자는 Cartoon의 구성요서가 바뀐다고 하여도 Cartoon을 고칠 필요가 없고, 기존에 남아있는 CartoonSpec을 수정하지 않아도 됩니다. 새로운 CartoonSpec을 만들어서 사용하면 기존소스의 변경없이 코드를 확장할 수 있습니다.

## OCP

_개방폐쇄의 원칙: Open Close Principle_

### 정의

작성된 함수는 확장에는 열려있고, 변경에는 닫혀있어야 한다는 원리입니다. 요구사항의 변경이나 추가사항이 발생하더라도, 기존 구성요소는 수정이 일어나지 말아야 하며, 기존 구성요소를 쉽게 확장해서 재사용할 수 있어야 합니다.

- 변경(확장)될 것과 변하지 않을 것을 엄격히 구분합니다.
- 이 두 모듈이 만나는 지점에 인터페이스를 정의합니다.
- 구현에 의존하기보다 정의한 인터페이스에 의존하도록 코드를 작성 합니다.

### 기대

- 관리 가능한 코드 작성
- 추상화
- 다형성

## LSP

_리스코브 치환의 원칙: The Liskov Substitution Principle_

### 정의

작성된 함수의 서브 타입은 언제나 기반 타입으로 교체할 수 있어야 합니다.

- 만약 두 개체가 똑 같은 일을 한다면 둘을 하나의 함수로 표현하고 이들을 구분할 수 있는 필드를 둡니다.

- 똑같은 연산을 제공하지만, 이들을 약간씩 다르게 한다면 공통의 인터페이스를 만들고 둘이 이를 구현 합니다. (인터페이스 상속)

* 공통된 연산이 없다면 완전 별개인 2개의 함수를 만듭니다.
* 만약 두 개체가 하는 일에 추가적으로 무언가를 더 한다면 구현 상속을 사용합니다.

### 기대

- 다형성의 근간이 됨
- 함수간 규약되어진 인터페이스로 상속이 일어남으로 다형성 구성 가능

## ISP

_인터페이스 분리의 원칙: Interface Segregation Principle_

### 정의

함수는 자신이 사용하지 않는 인터페이스는 구현하지 말아야 한다는 원리입니다.

- 구현된 클라이언트에 변경을 주지 말아야 합니다.
- 두 개 이상의 인터페이스가 공유하는 부분의 재사용을 극대화 합니다.
- 서로 다른 성격의 인터페이스를 명백히 분리 합니다.

### 기대

- 함수를 추상화하고 뽑아낸 인터페이스를 통한 분리
- 위임(Delegation)을 이용하여 인터페이스를 나눌 수 있습니다.
- 모듈화
- 확장성

## DIP

_의존성역전의 원칙: Dependency Inversion Principle_

### 정의

DIP의 키워드는 제어의 역전(IOC), 훅 메소드 오버라이드하는 방법을 이용해 일부기능을 확장하는 것입니다.

- Layering: 객체지향으로 잘 구현된 프로그램은 인터페이스를 통한 긴밀한 서비스들의 집합을 제공하는 레이어들로 구성되어 있습니다.

### 기대

- 효율적인 컴포넌트간의 교류
- 확장성
