const Joi = require("joi");

const usersSchema = Joi.object().keys({
  name: Joi.string().min(5).required(),
  password: Joi.string().min(4).required(),
  email: Joi.string().email().required(),
  mobile: Joi.any(),
  newsLetter: Joi.any(),
});

const prospectsSchema = Joi.object().keys({
  name: Joi.string().min(5).required(),
  email: Joi.string().email().required(),
  message: Joi.string().min(10).required(),
  replied: Joi.any(),
});

const loginSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(4).required(),
});



module.exports = {
  usersSchema,
  prospectsSchema,
  loginSchema,
};
