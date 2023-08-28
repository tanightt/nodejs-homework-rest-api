const handleValidateError = (error, data, next) => {
  error.status = 400;
  next();
};

const handleValidateUpdate = function (next) {
  this.options.runValidators = true;
  next();
};

module.exports = { handleValidateError, handleValidateUpdate };
