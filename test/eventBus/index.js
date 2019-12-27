const MSG_POOL = {
  NOT_FOUND: "not found mapping event",
  ALREADY_EXSIST: "already exsist mapping event",
  EMIT_EVENT: "event fired successfully",
  REMOVE_EVENT: "event removed succesfully"
};

function EventBus() {
  this.pool = {};
}

EventBus.prototype.addEvent = function(eventId, handler, data) {
  if (this.pool[eventId]) return console.log(MSG_POOL.ALREADY_EXSIST);

  this.pool[eventId] = {
    handler: handler,
    data: data
  };
};

EventBus.prototype.emitEvent = async function(eventId, callback) {
  if (!this.pool[eventId]) return console.log(MSG_POOL.NOT_FOUND);

  const event = this.pool[eventId];
  try {
    event.handler(event.data);
    console.log(MSG_POOL.EMIT_EVENT);

    //final callback
  } catch (err) {
    console.log("something wrong", err);
  }
};

EventBus.prototype.removeEvent = function(eventId) {
  if (!this.pool[eventId]) return console.log(MSG_POOL.NOT_FOUND);

  delete this.pool[eventId];
  console.log(MSG_POOL.REMOVE_EVENT);
};

EventBus.prototype.createEventId = function() {
  // 커스텀 이벤트 아이디 생성 함수
  // 특정 규약에 대한 벨리데이션 체크를 실시한다. - ex) 커스텀 이벤트는 반드시 {event :: - test - home - uuid}  으로 시작해야 한다
  // 특정 규약으로 만들어 져야만 이벤트 등록이 가능하도록 강제하는 로직이 addEvent 에서도 생겨야 한다. - ex) event :: 가 있어야만 등록
};

EventBus.prototype.createEventHandler = function() {
  // 커스텀 이벤트 핸들러 생성 함수
  // 특정 규약에 대한 벨리데이션 체크를 실시한다. - ex) 파라미터로 data 라는 객체를 받는다. 그리고 반드시 return 함수가 존재해야함 , 순수 함수여야 함
  // 특정 규약으로 만들어 져야만 이벤트 등록이 가능하도록 강제하는 로직이 addEvent 에서도 생겨야 한다. - ex) 상위 조건에 대한 벨리데이션 체크
};

EventBus.prototype.createEventData = function() {
  // 커스텀 이벤트에 전달할 데이터 함수
  // 데이터는 반드시 객체형태를 강제한다
  // 이 또한 addEvent 함수에서 체크하는 프로세스가 들어가야한다.
};

// 결과적으로 이벤트에 들어갈수 있는 포멧을 하나의 스팩으로 정의하고 규약대로 이벤트를 등록 / 발생 / 삭제 하는 식으로 사용한다.

const eb = new EventBus();

const EVENT_ID = "custom-event-id";

const EVENT_HANDLER = data => {
  const newNumbers = data.numbers.map(num => num + 1);
  console.log(newNumbers);
  return newNumbers;
};

const EVENT_DATA = {
  numbers: [1, 2, 3, 4, 5]
};

eb.addEvent(EVENT_ID, EVENT_HANDLER, EVENT_DATA);

eb.emitEvent(EVENT_ID);

console.log(eb);

eb.removeEvent(EVENT_ID);

eb.emitEvent(EVENT_ID);

console.log(eb);
