const express = require("express");
const app = express();

const SERVER_PORT = 3001;

let userCount = 0;

app.use((req, res, next) => {
  userCount += 1;
  console.log("userCount", userCount);
  req.__data = userCount;
  next();
});

app.get("/", (req, res) => {
  const isTarget = !!(req.__data % 4);
  res.json({ 
    msg: isTarget 
      ? `hi target ${req.__data}` 
      : `hello world ${req.__data}` 
  });
});

app.use("*", (req, res) => res.json({ msg: "not found" }));

app.listen(SERVER_PORT, () => {
  console.log(
    "\x1b[35m%s\x1b[0m",
    `[server ] listening on port ${SERVER_PORT} : http://localhost:${SERVER_PORT}`
  );
});
