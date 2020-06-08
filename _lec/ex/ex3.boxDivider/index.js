// const bd = new BoxDivider();

// bd.init({
//   fps: 1000, // 박스 이동속도
//   width: 400, // 컨테이너 넓이
//   height: 300, // 컨테이너 높이
//   color: "red", // 박스 색
// });

// bd.boxes = [];
// bd.isMoving = false;
// bd.fps = opts.fps || 1000;
// bd.width = opts.width || 400;
// bd.height = opts.height || 300;
// bd.color = opts.color;

// bd.move(); // 이동
// bd.pause(); // 일시정지
// bd.divde(); // 나누기
// bd.clear(); // 지우기 (초기화)

const INIT_STATE_BOX = {
  SIZE: 50,
  W: 400,
  H: 300,
  X: 0,
  Y: 0,
  COLOR: "red",
};
let _id = 0;
/**
 * Box : 정해진 규칙에 따라서 움직이고, 나뉠수 있는 직사각형
 */
function Box(option) {
  this.root = option.root || document.getElementById("root");
  this.id = option.id || "box" + _id++;
  this.size = option.size || INIT_STATE_BOX.SIZE;
  this.w = option.w || INIT_STATE_BOX.W;
  this.h = option.h || INIT_STATE_BOX.H;
  this.x = option.x || INIT_STATE_BOX.X;
  this.y = option.y || INIT_STATE_BOX.Y;
  this.color = option.color || INIT_STATE_BOX.COLOR;
}

Box.prototype.render = function () {
  const div = document.createElement("DIV");
  div.setAttribute("id", this.id);
  div.style.position = "absolute";
  div.style.top = 0 + "px";
  div.style.left = 0 + "px";
  div.style.width = this.size + "px";
  div.style.height = this.size + "px";
  div.style.backgroundColor = this.color;
  this.root.appendChild(div);
};
Box.prototype.moveToRight = function(){
  
}

const b = new Box({});
b.render();
