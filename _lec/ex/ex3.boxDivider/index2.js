// const containerW = document.getElementById('container').offsetWidth;
// const containerH = document.getElementById('container').offsetHeight;

const INITIAL_BOX_CONFIG = {
  $rootId: "container",
  W: 50,
  H: 50,
  X: 0,
  Y: 0,
};

// refactor start

let boxs = [];

// refactor end

let boxId = 0;

function Box(config) {
  this.conf = config || {};
  this.$root = document.getElementById(
    this.conf.$roodId || INITIAL_BOX_CONFIG.$rootId
  );
  this.id = "box" + boxId++;
  this.x = this.conf.x || INITIAL_BOX_CONFIG.X;
  this.y = this.conf.y || INITIAL_BOX_CONFIG.Y;
  this.w = this.conf.w || INITIAL_BOX_CONFIG.W;
  this.h = this.conf.h || INITIAL_BOX_CONFIG.H;
}

Box.prototype.render = function () {
  const div = document.createElement("DIV");
  div.setAttribute("id", this.id);
  div.style.position = "absolute";
  div.style.top = this.y + "px";
  div.style.left = this.x + "px";
  div.style.width = this.w + "px";
  div.style.height = this.h + "px";
  div.style.backgroundColor = "black";
  this.$root.appendChild(div);
  return this;
};

Box.prototype.clear = function () {
  boxs = [];
  this.$root.innerHTML = "";
  return this;
};

Box.prototype.createBox = function (opts) {
  boxs.push(new Box(opts));
  return this;
};
Box.prototype.renderAll = function () {
  boxs.map(function (box) {
    return box.render();
  });
};

// 초기화에 clear , render
Box.prototype.init = function () {
  box.clear().createBox({ x: 0, y: 0 }).renderAll();
};

Box.prototype.move = function (tick) {
  const target = this.$root.querySelector("#" + this.id);
  target.style.left = tick + "px";
  // target.style.top = tick + "px";
  return this;
};

Box.prototype.divide = function () {
  // 박스의 w, h 값 나누기.
};
// ---------------------------------------------------------

const box = new Box();
box.init();

let movement = null;
let tick = 0;
movement = setInterval(function () {
  if ((tick += 10) < 500-50-10) {
    box
      .clear()
      .render()
      .move((tick += 10));
  } else {
    clearInterval(movement);
  }
}, 100);

// ---------------------------------------------------------

// # Event
const initBtn = document.getElementById("btn__init");
const moveBtn = document.getElementById("btn__move");
const divideBtn = document.getElementById("btn__divide");

initBtn.addEventListener("click", function () {
  console.log("Init");
  box.init();
});
moveBtn.addEventListener("click", function () {
  console.log("Move");
  box
    .clear()
    .render()
    .move((tick += 10));
});

divideBtn.addEventListener("click", function () {
  console.log("Divide");
});
