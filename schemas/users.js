const Joi = require("joi");

const { emailRegexp } = require("../constants/user-constants");

const userSignUpSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  subscription: Joi.string(),
});

const userSignInSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
});

module.exports = { userSignUpSchema, userSignInSchema };
