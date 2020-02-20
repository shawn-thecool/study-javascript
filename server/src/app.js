const express = require("express");
const app = express();

const SERVER_PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/members", require("./api/v1/members"));

app.use("*", (req, res) => res.json({ msg: "not found" }));

app.listen(SERVER_PORT, () =>
  console.log(
    "\x1b[35m%s\x1b[0m",
    `[server ] listening on port ${SERVER_PORT} : http://localhost:${SERVER_PORT}`
  )
);
