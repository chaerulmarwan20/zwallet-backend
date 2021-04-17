const express = require("express");
const router = express.Router();
const transactionsController = require("../controllers/transactionsController");
const auth = require("../middlewares/auth");

router
  .get("/", auth.verification(), transactionsController.findAll)
  .post("/", auth.verification(), transactionsController.create)
  .get("/:id", auth.verification(), transactionsController.findUserTransactions)
  .get(
    "/receiver/:id",
    auth.verification(),
    transactionsController.findReceiverTransactions
  );

module.exports = router;
