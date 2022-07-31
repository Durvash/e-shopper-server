const company = require('../company/controllers/Company');
const user = require('../users/controllers/User');
const product = require('../product/controllers/Product');
const path = require('path');
const slugify = require('slugify');
const multer = require('multer');
const { testMiddleWare } = require('../middleware');
var router = require("express").Router();

module.exports = (app) => {
  /* const allowFileTypes = [
    'image/png',
    'image/jpeg',
    'image/jpg'
  ]
  
  const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, path.join(req.rootPath, 'assets/products/'))
    },
    filename: (req, file, callback) => {
      const name = slugify(file.originalname, { lower: true })
      callback(null, `${new Date().getTime()}-${name}`)
    }
  })
  
  const upload = multer({
    storage: storage,
    fileFilter: (req, file, callback) => {
      if (!allowFileTypes.includes(file.mimetype)) {
        return callback('file is not allowed.', false);
      }
      callback(null, true)
    },
    onError : (req, file, callback) => {
      // console.log('error', err);
      res.sendStatus(500).send({
        success: 0,
        message: err
      });
    }
  }) */

  // Get all user list
  router.get('/user-list', user.userList);
  
  // Get seller dropdown
  router.get('/seller-dropdown', user.sellerDropdown);

  // Get Login
  router.post('/login', user.loginDetail);

  // Get user detail
  router.get('/account', user.userDetail);
  
  // Get product list
  router.get('/product-list', product.productList);
  
  // Add product
  router.post('/product-add', product.productAdd);
  
  // Get product category dropdown
  router.get('/category-dropdown', product.categoryDropdown);
  
  // Get product brand
  router.get('/brand-dropdown', product.brandDropdown);
  
  // Get product tax
  router.get('/tax-dropdown', product.taxDropdown);
  
  // Get product tags
  router.get('/tag-dropdown', product.tagDropdown);
  
  // Get product tags
  router.get('/attribute-dropdown', product.attributeDropdown);
  
  // Get product tags
  router.get('/variant-dropdown', product.variantDropdown);
  
  app.use("/api", router);
};
