const companyModel = require("../models/Company_model");

exports.companyList = (req, res) => {
  companyModel.getCompanyData(req, (err, data) => {
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
