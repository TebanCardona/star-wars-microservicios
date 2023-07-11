const express = require("express");
const morgan = require("morgan");
const server = express();
const { errorResponse } = require("../utils");
server.use(express.json());
server.use(morgan("dev"));
server.use("/characters", require("../routes"));
server.use("*", (req, res) => {
  res.status(404).send("Not Found");
});
server.use(errorResponse);
module.exports = server;
