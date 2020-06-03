// el
var $root = document.getElementById("root");
// state
var state = {
  count:0
};
function setState(newState) {
  state = Object.assign(state, newState); 
  render(state);
}
// handler
function increase() {
  setState({ count: state.count + 1 });
}
function decrease() {
  setState({ count: state.count - 1 });
}
// html
function counter(props) {
  return `
  <div class="wrap_counter">
    <button type="button" onclick="increase()">+1</button>
    <strong>${props.count}</strong>
    <button type="button" onclick="decrease()">-1</button>
  </div>
  `;
}
// render
function render(props) {
  $root.innerHTML = counter(props);
}
// mounted
window.onload = function () {
  render(state);
};


