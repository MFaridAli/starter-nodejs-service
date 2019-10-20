const helper   = {};
const Promise = require("bluebird");


helper.runQuerySelectPromise = async (req, sql, param) => {
  return new Promise(function (resolve, reject) {
    req.getConnection((err, conn) => {
      conn.query(sql, param, (err, rows) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  });
}

module.exports = helper;
