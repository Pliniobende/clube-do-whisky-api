const Joi = require('joi');

const usersSchema = Joi.object().keys({
    name: Joi.string().min(5).required(),
    password: Joi.string().password().require(),
    email: Joi.string().email().require(),
    mobile: Joi.any(),
    newsLetter: Joi.any()
});

module.exports = {
    usersSchema
}