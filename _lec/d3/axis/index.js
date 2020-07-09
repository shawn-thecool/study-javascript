const data = [
  { date: new Date(2007, 3, 24), value: 10.24 },
  { date: new Date(2007, 3, 25), value: 20.35 },
  { date: new Date(2007, 3, 26), value: 30.84 },
  { date: new Date(2007, 3, 27), value: 40.92 },
  { date: new Date(2007, 3, 30), value: 50.81 },
  { date: new Date(2007, 4, 10), value: 40.47 },
];

const data2 = [
  { date: new Date(2007, 3, 24), value: 12.24 },
  { date: new Date(2007, 3, 25), value: 32.35 },
  { date: new Date(2007, 3, 26), value: 40.84 },
  { date: new Date(2007, 3, 27), value: 20.92 },
  { date: new Date(2007, 3, 30), value: 80.81 },
  { date: new Date(2007, 4, 10), value: 99.47 },
];
// console.log('new Date(2007, 3, 24)', new Date(2007, 3, 24).toString());

// const data = [
//   { date: 100, value: 100 },
//   { date: 70, value: 70 },
//   { date: 50, value: 100 },
//   { date: 100, value: 50 },
// ];

const STYLE = {
  H: 800,
  W: 800,
  T: 50,
  B: 50,
  R: 50,
  L: 50,
};

const x = d3
  .scaleUtc()
  .domain(d3.extent(data, (d) => d.date))
  .range([STYLE.L, STYLE.W - STYLE.R]);

const y = d3
  .scaleLinear()
  .domain([0, 200])
  // .domain([0, d3.max(data, (d) => d.value)])
  .range([STYLE.H - STYLE.B, STYLE.T]);

const line = d3
  .line()
  .x((d) => x(d.date))
  .y((d) => y(d.value));

const xAxis = d3
  .axisBottom(x)
  .ticks(STYLE.W / 80)
  .tickSizeOuter(0);

const yAxis = d3.axisLeft(y);

const svg = d3
  .select("#root")
  .append("svg")
  .attr("width", STYLE.W)
  .attr("height", STYLE.H)
  .attr("viewBox", [0, 0, STYLE.W, STYLE.H])
  .attr("style", "background:#efefef");
svg
  .append("path")
  .datum(data)
  .attr("fill", "transparent")
  .attr("stroke", "blue")
  .attr("d", line);

svg
  .append("path")
  .datum(data2)
  .attr("fill", "transparent")
  .attr("stroke", "red")
  .attr("d", line);

svg
  .append("g")
  .attr("transform", `translate(0, ${STYLE.H - STYLE.B})`)
  .call(xAxis);

svg
  .append("g")
  .attr("transform", `translate(${STYLE.L}, 0)`)
  .call(yAxis)
  .select('.domain').remove()
