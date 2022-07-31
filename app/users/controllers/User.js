const userModel = require("../models/User_model");

exports.userList = (req, res) => {
  userModel.getUserList(req, (err, data) => {
    if (err) {
      res.status(200).send({
        success: 0,
        message:
          err.message || "Some error occured while retrieving user data..!!",
      });
    } else {
      res.send({
        success: 1,
        data: data,
      });
    }
  });
};

exports.loginDetail = (req, res) => {
  userModel.getLoginDetail(req.body, (err, data) => {
    if (err) {
      res.status(200).send({
        success: 0,
        message: err.message || "Some error occured while retrieving user data..!!",
      });
    } else {

      let login_token = "123456";

      res.send({
        success: 1,
        user: data,
        accessToken: login_token
      });
    }
  });
};

exports.userDetail = (req, res) => {
  userModel.getUserDetail(req.body, (err, data) => {
    if (err) {
      res.status(200).send({
        success: 0,
        message: err.message || "Some error occured while retrieving user data..!!",
      });
    } else {

      res.send({
        success: 1,
        user: data,
        accessToken: data.LoginToken
      });
    }
  });
};

exports.sellerDropdown = (req, res) => {
  userModel.getSellerDropdown(req.body, (err, data) => {
    if(err) {
      res.status(200).send({
        success: 0,
        message: err.message || "Some error occured while retrieving user data..!!",
      });
    } else {
      res.send({
        success: 1,
        data: data
      })
    }
  })
}