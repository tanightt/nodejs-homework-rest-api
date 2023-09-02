const handleValidateError = (error, data, next) => {
  const { name, code } = error;
  error.status = name === "MongoServerError" && code === 11000 ? 409 : 400;
  next();
};

const handleValidateUpdate = function (next) {
  this.options.runValidators = true;
  next();
};

module.exports = { handleValidateError, handleValidateUpdate };
