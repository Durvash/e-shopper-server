const productModel = require("../models/Product_model");

exports.productList = (req, res) => {
  productModel.getProductList(req, (err, data) => {
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

exports.productAdd = (req, res) => {
  console.log(req.body);
  /* const insert_arr = {
    'SellerId'      : req.body.Seller,
    'CategoryId'    : req.body.Category,
    'BrandId'       : req.body.Brand,
    'ProductName'   : req.body.ProductName,
    'Slug'          : req.body.Slug,
    'ShortDesc'     : req.body.ShortDesc,
    'LongDesc'      : req.body.LongDesc,
    'ProductType'   : 0,
    // 'Image'         : req.file.Image.filename,
    'TaxId'         : req.body.Tax,
    'RegularPrice'  : req.body.RegularPrice,
    'SalePrice'     : req.body.SalePrice
  } */
  res.send({
    success: 1,
    data: req.body,
  });
  // console.log(insert_arr);
  /* productModel.addProduct(insert_arr, (err, data) => {
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
  }); */
};

exports.categoryDropdown = (req, res) => {
  // console.log(req);
  productModel.getCategoryDropdown(req, (err, data) => {
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

exports.brandDropdown = (req, res) => {
  // console.log(req);
  productModel.getBrandDropdown(req, (err, data) => {
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

exports.taxDropdown = (req, res) => {
  // console.log(req);
  productModel.getTaxDropdown(req, (err, data) => {
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

exports.tagDropdown = (req, res) => {
  // console.log(req);
  productModel.getTagDropdown(req, (err, data) => {
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

exports.attributeDropdown = (req, res) => {
  // console.log(req);
  productModel.getAttributeDropdown(req, (err, data) => {
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

exports.variantDropdown = (req, res) => {
  // console.log(req);
  productModel.getVariantDropdown(req, (err, data) => {
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
