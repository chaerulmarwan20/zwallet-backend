const transactionsModel = require("../models/transactionsModel");
const helper = require("../helpers/printHelper");
const validation = require("../helpers/validation");

exports.findAll = (req, res) => {
  const { page, perPage } = req.query;
  const keyword = req.query.keyword ? req.query.keyword : "";
  const sortBy = req.query.sortBy ? req.query.sortBy : "id";
  const order = req.query.order ? req.query.order : "ASC";

  transactionsModel
    .getAllTransactions(page, perPage, keyword, sortBy, order)
    .then(([totalData, totalPage, result, page, perPage]) => {
      if (result < 1) {
        helper.printError(res, 400, "Transactions not found");
        return;
      }
      helper.printPaginate(
        res,
        200,
        "Find all transactions successfully",
        totalData,
        totalPage,
        result,
        page,
        perPage
      );
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.create = async (req, res) => {
  const validate = validation.validationTransactions(req.body);

  if (validate.error) {
    helper.printError(res, 400, validate.error.details[0].message);
    return;
  }

  const { idUser, idReceiver, amount, notes } = req.body;

  try {
    const getUser = await transactionsModel.getUser(idUser);
    const getReceiver = await transactionsModel.getUser(idReceiver);
    if (getUser < 1 || getReceiver < 1) {
      helper.printError(res, 400, "Id user or receiver not found!");
      return;
    }
  } catch (err) {
    helper.printError(res, 500, err.message);
  }

  const data = {
    idUser,
    date: new Date(),
    idReceiver,
    idSender: null,
    amount,
    notes,
    type: "Transfer",
    status: "Success",
    credit: amount,
  };

  transactionsModel
    .createTransactions(data)
    .then(async (result) => {
      if (result.affectedRows === 0) {
        helper.printError(res, 400, "Error creating transactions");
        return;
      }
      const credit = result[0].credit;
      const idUser = result[0].idUser;
      const idReceiver = result[0].idReceiver;
      await transactionsModel.reduceCredit(credit, idUser);
      await transactionsModel.addCredit(credit, idReceiver);
      const dataSender = {
        idUser: idReceiver,
        date: new Date(),
        idReceiver: null,
        idSender: idUser,
        amount: amount,
        notes: notes,
        type: "Receive",
        status: "Success",
        credit: amount,
      };
      await transactionsModel.createTransactions(dataSender);
      helper.printSuccess(res, 200, "Transactions successfully", result);
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.findUserTransactions = (req, res) => {
  const id = req.params.id;
  const { page, perPage } = req.query;
  const sortBy = req.query.sortBy ? req.query.sortBy : "id";
  const order = req.query.order ? req.query.order : "ASC";

  transactionsModel
    .getAllUserTransactions(id, page, perPage, sortBy, order)
    .then(([totalData, totalPage, result, page, perPage]) => {
      if (result < 1) {
        helper.printError(res, 400, "Transactions not found");
        return;
      }
      helper.printPaginate(
        res,
        200,
        "Find all user transactions successfully",
        totalData,
        totalPage,
        result,
        page,
        perPage
      );
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};

exports.findReceiverTransactions = (req, res) => {
  const id = req.params.id;
  const { page, perPage } = req.query;
  const sortBy = req.query.sortBy ? req.query.sortBy : "id";
  const order = req.query.order ? req.query.order : "ASC";

  transactionsModel
    .getAllReceiverTransactions(id, page, perPage, sortBy, order)
    .then(([totalData, totalPage, result, page, perPage]) => {
      if (result < 1) {
        helper.printError(res, 400, "Transactions not found");
        return;
      }
      helper.printPaginate(
        res,
        200,
        "Find all receiver transactions successfully",
        totalData,
        totalPage,
        result,
        page,
        perPage
      );
    })
    .catch((err) => {
      helper.printError(res, 500, err.message);
    });
};
