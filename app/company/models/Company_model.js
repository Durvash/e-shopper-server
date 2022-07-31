const sql = require("../../config/database");

exports.getCompanyData = (params, result) => {
  sql.query(`SELECT * FROM company_master`, (err, que_res) => {
    if (err) {
      result({ err }, null);
      return;
    }

    if (que_res.length > 0) {
      result(null, que_res);
      return;
    }

    result({ message: "Record not found." }, null);
  });
};
