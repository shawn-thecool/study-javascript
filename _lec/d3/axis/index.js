const data = [
  { date: new Date(2007, 1, 25), value: 20.24 },
  { date: new Date(2007, 2, 25), value: 22.35 },
  { date: new Date(2007, 3, 25), value: 30.84 },
  { date: new Date(2007, 4, 25), value: 22.92 },
  { date: new Date(2007, 5, 25), value: 24.81 },
  { date: new Date(2007, 6, 25), value: 25.47 },
  { date: new Date(2007, 7, 25), value: 20.47 },
  { date: new Date(2007, 8, 25), value: 19.47 },
  { date: new Date(2007, 9, 25), value: 24.47 },
  { date: new Date(2007, 10, 25), value: 70.47 },
  { date: new Date(2007, 11, 25), value: 28.47 },
  { date: new Date(2007, 12, 25), value: 50.47 },
];

const data2 = [
  { date: new Date(2008, 1, 25), value: 35.24 },
  { date: new Date(2008, 2, 25), value: 30.35 },
  { date: new Date(2008, 3, 25), value: 28.84 },
  { date: new Date(2008, 4, 25), value: 40.92 },
  { date: new Date(2008, 5, 25), value: 50.81 },
  { date: new Date(2008, 6, 25), value: 21.47 },
  { date: new Date(2008, 7, 25), value: 18.47 },
  { date: new Date(2008, 8, 25), value: 19.47 },
  { date: new Date(2008, 9, 25), value: 24.47 },
  { date: new Date(2008, 10, 25), value: 80.47 },
  { date: new Date(2008, 11, 25), value: 68.47 },
  { date: new Date(2008, 12, 25), value: 10.47 },
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

const series = ["2007", "2008"];
const datasets = data.concat(data2);
// const colors = d3.scaleOrdinal(d3.schemeCategory20);

const x = d3
  .scaleUtc()
  .domain(d3.extent(datasets, (d) => d.date))
  .range([STYLE.L, STYLE.W - STYLE.R]);

const y = d3
  .scaleLinear()
  .domain([0, d3.max(datasets, (d) => d.value)])
  .range([STYLE.H - STYLE.B, STYLE.T]);

const line = d3
  .line()
  .x((d) => x(d.date))
  .y((d) => y(d.value));

// const curve = d3
//   .curve(d3.curveBasis)
//   .x((d) => x(d.date))
//   .y((d) => y(d.value));

const xAxis = d3
  .axisBottom(x)
  .ticks(d3.timeMonth.every(3))
  .tickFormat((d) => (d <= d3.timeYear(d) ? d.getFullYear() : null));
// .ticks(STYLE.W /100)
// .tickSizeOuter(0);

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
  .datum(datasets)
  .attr("fill", "transparent")
  .attr("stroke", "gold")
  .attr("d", line);

  svg
  .append("path")
  .datum(data)
  .attr("fill", "transparent")
  .attr("stroke", (d, i) => {
    console.log("d", d);

    return "blue";
  })
  .attr("d", line);
svg
  .append("path")
  .datum(data2)
  .attr("fill", "transparent")
  .attr("stroke", (d, i) => {
    console.log("d", d);

    return "red";
  })
  .attr("d", line);

svg
  .append("g")
  .attr("transform", `translate(0, ${STYLE.H - STYLE.B})`)
  .call(xAxis)
  .select(".domain")
  .remove();

svg
  .append("g")
  .attr("transform", `translate(${STYLE.L}, 0)`)
  .call(yAxis)
  .select(".domain")
  .remove();
