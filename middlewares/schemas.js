const Joi = require('joi');

const usersSchema = Joi.object().keys({
    name: Joi.string().min(5).required(),
    password: Joi.string().required(),
    email: Joi.string().email().required(),
    mobile: Joi.any(),
    newsLetter: Joi.any()
});

module.exports = {
    usersSchema
}