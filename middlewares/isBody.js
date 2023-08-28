const { HttpError } = require("../helpers");

const isBody = (req, res, next) => {
  const { favorite } = req.body;
  if (typeof favorite === "undefined") {
    return next(HttpError(400, "missing field favorite"));
  }
  next();
};

module.exports = isBody;
