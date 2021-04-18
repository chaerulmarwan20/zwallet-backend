const express = require("express");
const router = express.Router();
const transactionsController = require("../controllers/transactionsController");
const auth = require("../middlewares/auth");

router
  .get("/", auth.verification(), transactionsController.findAll)
  .post("/", auth.verification(), transactionsController.create)
  .post("/details", auth.verification(), transactionsController.createDetails)
  .get("/:id", auth.verification(), transactionsController.findUserTransactions)
  .get(
    "/details/:id",
    auth.verification(),
    transactionsController.findDetailsById
  );

module.exports = router;
