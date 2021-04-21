const express = require("express");
const router = express.Router();
const transactionsController = require("../controllers/transactionsController");
const auth = require("../middlewares/auth");

router
  .get("/", auth.verification(), transactionsController.findAll)
  .post("/", auth.verification(), transactionsController.create)
  .post("/details", auth.verification(), transactionsController.createDetails)
  .put("/top-up/:id", auth.verification(), transactionsController.topUpCredit)
  .get("/:id", auth.verification(), transactionsController.findUserTransactions)
  .get(
    "/income/:id",
    auth.verification(),
    transactionsController.findUserIncome
  )
  .get(
    "/expense/:id",
    auth.verification(),
    transactionsController.findUserExpense
  )
  .get(
    "/details/:id",
    auth.verification(),
    transactionsController.findDetailsById
  );

module.exports = router;
