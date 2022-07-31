const sql = require("../../config/database");

exports.getUserList = (params, result) => {
  sql.query("SELECT * FROM tbl_user_master", (err, que_res) => {
    if (err) {
      result(err, null);
      return;
    }

    if (que_res.length > 0) {
      result(null, que_res);
      return;
    }

    result({ message: "Record not found." }, null);
  });
};

exports.getLoginDetail = (params, result) => {
  sql.query(
    `SELECT * FROM tbl_user_master WHERE (UserName = "${params.username}" OR Email = "${params.username}") AND Password = "${params.password}"`,
    (err, que_res) => {
      if (err) {
        result(err, null);
        return;
      }

      if (que_res.length > 0) {
        result(null, que_res[0]);
        return;
      }

      result({ message: "Invalid Username or Password." }, null);
    }
  );
};

exports.getUserDetail = (params, result) => {
  sql.query(
    `SELECT U.UserId, U.FirstName, U.LastName, U.UserName, U.Email, U.Password, U.MobileNo, U.CompanyName, U.Profile, LD.LoginToken, LD.LoginTime, LD.DeviceType, LD.DeviceKey
  FROM tbl_user_master AS U
  LEFT JOIN tbl_login_detail AS LD ON LD.UserId = U.UserId
  WHERE LD.LoginToken = "123456"`,
    (err, que_res) => {
      if (err) {
        result(err, null);
        return;
      }

      if (que_res.length > 0) {
        result(null, que_res[0]);
        return;
      }

      result({ message: "Invalid Token." }, null);
    }
  );
};

exports.getSellerDropdown = (params, result) => {
  sql.query(`SELECT UserId AS value, concat(FirstName, ' ', LastName) AS label FROM tbl_user_master WHERE RoleId = 3`, (err, que_res) => {
    if (err) {
      result(err, null);
      return;
    }

    if (que_res.length > 0) {
      result(null, que_res);
      return;
    }

    result({ message: "Record not found." }, null);
  });
};
