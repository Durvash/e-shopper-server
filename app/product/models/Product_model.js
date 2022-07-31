const sql = require("../../config/database");

exports.getProductList = (params, result) => {
  sql.query(
    "SELECT * FROM tbl_product_master WHERE IsDeleted = 0",
    (err, que_res) => {
      if (err) {
        result(err, null);
        return;
      }

      if (que_res.length > 0) {
        result(null, que_res);
        return;
      }

      result({ message: "Record not found." }, null);
    }
  );
};

exports.addProduct = (params, result) => {
  sql.query(
    "INSERT INTO tbl_product_master SET ?",
    params,
    (err, que_res) => {
      console.log(err, que_res);
      if (err) {
        result(err, null);
        return;
      }

      if (que_res.length > 0) {
        result(null, que_res);
        return;
      }

      result({ message: "Record not inserted, Something went wrong." }, null);
    }
  );
};

exports.getCategoryDropdown = (params, result) => {
  sql.query(
    "SELECT CategoryId AS value, Name AS label FROM tbl_product_category WHERE IsDeleted = 0",
    (err, que_res) => {
      if (err) {
        result(err, null);
        return;
      }

      if (que_res.length > 0) {
        result(null, que_res);
        return;
      }

      result({ message: "Record not found." }, null);
    }
  );
};

exports.getBrandDropdown = (params, result) => {
  sql.query(
    "SELECT BrandId AS value, BrandName AS label FROM tbl_brand WHERE IsDeleted = 0",
    (err, que_res) => {
      if (err) {
        result(err, null);
        return;
      }

      if (que_res.length > 0) {
        result(null, que_res);
        return;
      }

      result({ message: "Record not found." }, null);
    }
  );
};

exports.getTaxDropdown = (params, result) => {
  sql.query(
    "SELECT TaxId AS value, Name AS label FROM tbl_tax WHERE IsDeleted = 0",
    (err, que_res) => {
      if (err) {
        result(err, null);
        return;
      }

      if (que_res.length > 0) {
        result(null, que_res);
        return;
      }

      result({ message: "Record not found." }, null);
    }
  );
};

exports.getTagDropdown = (params, result) => {
  sql.query(
    "SELECT TagId AS value, TagName AS label FROM tbl_product_tag_master WHERE IsDeleted = 0",
    (err, que_res) => {
      if (err) {
        result(err, null);
        return;
      }

      if (que_res.length > 0) {
        result(null, que_res);
        return;
      }

      result({ message: "Record not found." }, null);
    }
  );
};

exports.getAttributeDropdown = (params, result) => {
  sql.query(
    "SELECT Aid AS value, Name AS label FROM tbl_product_attributes WHERE IsDeleted = 0",
    (err, que_res) => {
      if (err) {
        result(err, null);
        return;
      }

      if (que_res.length > 0) {
        result(null, que_res);
        return;
      }

      result({ message: "Record not found." }, null);
    }
  );
};

exports.getVariantDropdown = (params, result) => {
  sql.query(
    "SELECT Vid AS value, Name AS label FROM tbl_product_variations WHERE IsDeleted = 0",
    (err, que_res) => {
      if (err) {
        result(err, null);
        return;
      }

      if (que_res.length > 0) {
        result(null, que_res);
        return;
      }

      result({ message: "Record not found." }, null);
    }
  );
};
