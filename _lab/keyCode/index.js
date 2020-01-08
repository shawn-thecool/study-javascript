const map = [
  [1, 1, 4, 2, 1],
  [1, 2, 3, 8, 9],
  [1, 1, 1, 1, 7],
  [2, 1, 2, 1, 1],
  [3, 2, 1, 2, 3]
];

let state = {
  loc: {
    x: 2,
    y: 2
  }
};

const setState = obj => {
  state = { ...state, ...obj };
  console.table(state);
};

const moveTo = (x, y) => {
  if (!map[x]) return console.log('check1', map[x])
  if (!map[x][y]) return console.log("check2", map[x][y]);
  setState({ loc: { x, y } });
};

const left = () => moveTo(state.loc.x - 1, state.loc.y);
const right = () => moveTo(state.loc.x + 1, state.loc.y);
const down = () => moveTo(state.loc.x, state.loc.y + 1);
const up = () => moveTo(state.loc.x, state.loc.y - 1);

const keyMap = new Map();

keyMap.set(65, left);
keyMap.set(68, right);
keyMap.set(83, down);
keyMap.set(87, up);
keyMap.set(37, left);
keyMap.set(39, right);
keyMap.set(40, down);
keyMap.set(38, up);

const bindKeyEvents = () => {
  window.addEventListener("keydown", evt => {
    const keyCode = evt.keyCode;
    if (keyMap.has(keyCode)) keyMap.get(keyCode).call();
  });
};

bindKeyEvents();
