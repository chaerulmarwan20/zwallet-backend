const connection = require("../configs/dbConfig");

exports.getAllTransactions = (
  queryPage,
  queryPerPage,
  keyword,
  sortBy,
  order
) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT COUNT(*) AS totalData FROM transactions INNER JOIN users ON transactions.idUser = users.id WHERE transactions.status LIKE ? OR users.username LIKE ? OR users.email LIKE ?",
      [`%${keyword}%`, `%${keyword}%`, `%${keyword}%`],
      (err, result) => {
        let totalData, page, perPage, totalPage;
        if (err) {
          reject(new Error("Internal server error"));
        } else {
          totalData = result[0].totalData;
          page = queryPage ? parseInt(queryPage) : 1;
          perPage = queryPerPage ? parseInt(queryPerPage) : 5;
          totalPage = Math.ceil(totalData / perPage);
        }
        const firstData = perPage * page - perPage;
        connection.query(
          `SELECT transactions.id, users.username, users.email, users.fullName, users.image, transactions.date, transactions.idReceiver, transactions.amount, transactions.notes, transactions.status, transactions.credit FROM transactions INNER JOIN users ON transactions.idUser = users.id WHERE transactions.status LIKE ? OR users.username LIKE ? OR users.email LIKE ? ORDER BY ${sortBy} ${order} LIMIT ?, ?`,
          [`%${keyword}%`, `%${keyword}%`, `%${keyword}%`, firstData, perPage],
          (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve([totalData, totalPage, result, page, perPage]);
            }
          }
        );
      }
    );
  });
};

exports.getUser = (idUser) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT users.id FROM users WHERE id = ?",
      idUser,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error("Internal server error"));
        }
      }
    );
  });
};

exports.createTransactions = (data) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO transactions SET ?", data, (err, result) => {
      if (!err) {
        connection.query(
          "SELECT * FROM transactions WHERE id = ?",
          result.insertId,
          (err, result) => {
            if (!err) {
              resolve(result);
            } else {
              reject(new Error("Internal server error"));
            }
          }
        );
      } else {
        reject(new Error("Internal server error"));
      }
    });
  });
};

exports.reduceCredit = (credit, idUser) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE users SET credit = credit - ? WHERE id = ?",
      [credit, idUser],
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error("Internal server error"));
        }
      }
    );
  });
};

exports.addCredit = (credit, idReceiver) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE users SET credit = credit + ? WHERE id = ?",
      [credit, idReceiver],
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error("Internal server error"));
        }
      }
    );
  });
};

exports.getAllUserTransactions = (
  id,
  queryPage,
  queryPerPage,
  sortBy,
  order
) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT COUNT(*) AS totalData FROM transactions WHERE transactions.idUser = ?",
      [id],
      (err, result) => {
        let totalData, page, perPage, totalPage;
        if (err) {
          reject(new Error("Internal server error"));
        } else {
          totalData = result[0].totalData;
          page = queryPage ? parseInt(queryPage) : 1;
          perPage = queryPerPage ? parseInt(queryPerPage) : 5;
          totalPage = Math.ceil(totalData / perPage);
        }
        const firstData = perPage * page - perPage;
        connection.query(
          `SELECT transactions.id, users.username, users.email, users.fullName, users.image, transactions.date, transactions.idUser, transactions.amount, transactions.notes, transactions.status, transactions.type, transactions.credit FROM transactions INNER JOIN users ON transactions.idReceiver = users.id WHERE transactions.idUser = ? ORDER BY ${sortBy} ${order} LIMIT ?, ?`,
          [id, firstData, perPage],
          (err, result) => {
            if (err) {
              reject(new Error("Internal server error"));
            } else {
              resolve([totalData, totalPage, result, page, perPage]);
            }
          }
        );
      }
    );
  });
};

exports.getAllReceiverTransactions = (
  id,
  queryPage,
  queryPerPage,
  sortBy,
  order
) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT COUNT(*) AS totalData FROM transactions WHERE transactions.idReceiver = ?",
      [id],
      (err, result) => {
        let totalData, page, perPage, totalPage;
        if (err) {
          reject(new Error("Internal server error"));
        } else {
          totalData = result[0].totalData;
          page = queryPage ? parseInt(queryPage) : 1;
          perPage = queryPerPage ? parseInt(queryPerPage) : 5;
          totalPage = Math.ceil(totalData / perPage);
        }
        const firstData = perPage * page - perPage;
        connection.query(
          `SELECT transactions.id, users.username, users.email, users.fullName, users.image, transactions.date, transactions.idReceiver, transactions.amount, transactions.notes, transactions.status, transactions.type, transactions.credit FROM transactions INNER JOIN users ON transactions.idUser = users.id WHERE transactions.idReceiver = ? ORDER BY ${sortBy} ${order} LIMIT ?, ?`,
          [id, firstData, perPage],
          (err, result) => {
            if (err) {
              reject(new Error("Internal server error"));
            } else {
              resolve([totalData, totalPage, result, page, perPage]);
            }
          }
        );
      }
    );
  });
};
