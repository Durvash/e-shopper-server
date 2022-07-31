exports.testMiddleWare = (req, res, next) => {
  let err = 1;
  if (err) {
    return res.send({
      success: 0,
      message: 'Got error for testing middleware.',
      data: req.body
    });
  } else {
    next();
  }
};
