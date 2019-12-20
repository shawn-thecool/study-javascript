  // ISP 를 구현하기 앞서 ES6 Simbol 을 이용해서
  // interface 를 구현해 보자

  // SRP 가 클래스간의 단일 책임을 강조했다면
  // ISP 는 인터페이스간의 단일 책임을 강조하는 것.
  // 우선은 인터페이스를 만들어 보자

  // 1. 인터페이스가 무엇인지 알아보자 (Java)
  // 추상클래스와 final 변수로만 이루어진 클래스임
  // 클래스가 인터페이스를 구현해 주어야만 상속이 가능하다
  // 다중상속을 구현할 수 있도록 도와주는 도구

  // 2. 인터페이스의 특징
  // - 구현된 메소드는 올 수 없고 추상 메소드만 정의함
  // - 일반 클래스는 여러 interface를 다중 상속함
  // - 인터페이스 간의 상속에는 다중상속이 제공됨
  // - 상속받은 일반 클래스는 인터페이스의 추상메서드를 모두 재정의 함

const Interface = function(){
  // 자기 자신을 생성할수 없도록 예외처리

  // 명세

  // set, get

  // return
}


const Implements = function(interfaces){
  //callee .interface()
}


// class A extends Implements(Interface, ....)

// module.exports = Interface


// 결론 : 
// 인터페이스를 강제할 수 없다.
// 타입 스크립트의 class 먼저 살펴보자

