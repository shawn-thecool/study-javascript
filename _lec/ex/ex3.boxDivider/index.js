
/**
 * Box : 정해진 규칙에 따라서 스타일링되고, 움직일 수 있는 정사각형
 */
const REVERSE_DIRECTION_MAP = {
  UP: "DOWN",
  DOWN: "UP",
  LEFT: "RIGHT",
  RIGHT: "LEFT",
};
const INIT_STATE_BOX = {
  ROOT_ID: "root",
  DIRECTION_X: "RIGHT",
  DIRECTION_Y: "DOWN",
  COLOR: "red",
  SIZE: 50,
  W: 600,
  H: 400,
  X: 0,
  Y: 0,
};
let _id = 0;
function Box(option) {
  this.opts = option || {};
  this.$root = document.getElementById(
    this.opts.rootId || INIT_STATE_BOX.ROOT_ID
  );
  this.id = this.opts.id || "box" + _id++;
  this.dx = this.opts.dx || INIT_STATE_BOX.DIRECTION_X;
  this.dy = this.opts.dy || INIT_STATE_BOX.DIRECTION_Y;
  this.w = this.opts.w || INIT_STATE_BOX.W;
  this.h = this.opts.h || INIT_STATE_BOX.H;
  this.x = this.opts.x || INIT_STATE_BOX.X;
  this.y = this.opts.y || INIT_STATE_BOX.Y;
  this.size = this.opts.size || INIT_STATE_BOX.SIZE;
  this.color = this.opts.color || INIT_STATE_BOX.COLOR;
}
Box.prototype.render = function () {
  const div = document.createElement("DIV");
  div.setAttribute("id", this.id);
  div.style.position = "absolute";
  div.style.top = this.y + "px";
  div.style.left = this.x + "px";
  div.style.width = this.size + "px";
  div.style.height = this.size + "px";
  div.style.backgroundColor = this.color;
  this.$root.appendChild(div);
  return this;
};
Box.prototype.checkCrashed = function ({ step, dx, dy }) {
  /* X축 검수 */
  if (dx === "RIGHT") {
    if (this.x + step + this.size > this.w) {
      this.x -= step;
      this.dx = REVERSE_DIRECTION_MAP["RIGHT"];
    } else {
      this.x += step;
    }
  } else if (dx === "LEFT") {
    if (this.x - step < 0) {
      this.x += step;
      this.dx = REVERSE_DIRECTION_MAP["LEFT"];
    } else {
      this.x -= step;
    }
  }
  /* Y축 검수 */
  if (dy === "DOWN") {
    if (this.y + step + this.size > this.h) {
      this.y -= step;
      this.dy = REVERSE_DIRECTION_MAP["DOWN"];
    } else {
      this.y += step;
    }
  } else if (dy === "UP") {
    if (this.y - step < 0) {
      this.y += step;
      this.dy = REVERSE_DIRECTION_MAP["UP"];
    } else {
      this.y -= step;
    }
  }
  return this;
};
Box.prototype.move = function () {
  const target = this.$root.querySelector("#" + this.id);
  target.style.top = this.y + "px";
  target.style.left = this.x + "px";
  return this;
};
/**
 * BoxDivider : 박스를 나눌수 있고 핸들링이 가능한 컨테이너
 */
const INIT_STATE_BOX_DIVIDER = {
  ROOT_ID: "root",
  BOXS: [],
  STEP: 10,
  FPS: 1000 / 62,
  IS_PAUSE: true,
  MOVEMENT: null,
};
let _boxDivId = 0;
function BoxDivider(option) {
  this.opts = option || {};
  this.$root = document.getElementById(
    this.opts.rootId || INIT_STATE_BOX_DIVIDER.ROOT_ID
  );
  this.id = this.opts.id || "boxDivider" + _boxDivId++;
  this.boxs = this.opts.boxs || INIT_STATE_BOX_DIVIDER.BOXS;
  this.step = this.opts.step || INIT_STATE_BOX_DIVIDER.STEP;
  this.fps = this.opts.fps || INIT_STATE_BOX_DIVIDER.FPS;
  this.isPause = this.opts.isPause || INIT_STATE_BOX_DIVIDER.IS_PAUSE;
  this.movement = this.opts.movement || INIT_STATE_BOX_DIVIDER.MOVEMENT;
}
BoxDivider.prototype.init = function () {
  this.clear().create().render();
  return this;
};
BoxDivider.prototype.clear = function () {
  this.boxs = [];
  this.$root.innerHTML = "";
  clearInterval(this.movement);
  return this;
};
BoxDivider.prototype.render = function () {
  this.boxs.map((box) => box.render());
  return this;
};
BoxDivider.prototype.create = function (opts) {
  this.boxs.push(new Box(opts));
  return this;
};
BoxDivider.prototype.remove = function (id) {
  this.boxs = this.boxs.filter((box) => box.id !== id);
  return this;
};
BoxDivider.prototype.move = function () {
  this.movement = setInterval(() => {
    !this.isPause
      ? this.boxs.map((box) =>
          box.checkCrashed({ step: this.step, dx: box.dx, dy: box.dy }).move()
        )
      : clearInterval(this.movement);
  }, this.fps);
  return this;
};
BoxDivider.prototype.pause = function () {
  this.isPause = !this.isPause;
  clearInterval(this.movement);
  return this;
};
BoxDivider.prototype.divide = function () {
  this.boxs.map((box) => {
    const halfSize = Math.floor(box.size / 2);
    this.create({
      size: halfSize,
      x: box.x,
      y: box.y,
      dx: "RIGHT",
      dy: "DOWN",
    })
      .create({
        size: halfSize,
        x: box.x,
        y: box.y,
        dx: "LEFT",
        dy: "DOWN",
      })
      .create({
        size: halfSize,
        x: box.x,
        y: box.y,
        dx: "RIGHT",
        dy: "UP",
      })
      .create({
        size: halfSize,
        x: box.x,
        y: box.y,
        dx: "LEFT",
        dy: "UP",
      })
      .remove(box.id);
  });
  this.$root.innerHTML = "";
  this.render();
  return this;
};


// exec()
const bd = new BoxDivider();
document.querySelector(".btn_init").addEventListener("click", () => bd.init());
document
  .querySelector(".btn_pause")
  .addEventListener("click", () => bd.pause().move());
document
  .querySelector(".btn_divide")
  .addEventListener("click", () => bd.divide());
document
  .querySelector(".btn_clear")
  .addEventListener("click", () => bd.clear());
