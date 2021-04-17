const express = require("express");
const route = express.Router();

const usersRouter = require("./usersRouter");
const transactionsRouter = require("./transactionsRouter");

route.use("/users", usersRouter);
route.use("/transactions", transactionsRouter);

module.exports = route;
