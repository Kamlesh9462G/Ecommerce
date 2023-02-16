const Joi = require("joi");
const { password } = require("./custom.validation");

const signup = {
    body: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.required().custom(password),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        phoneNumber: Joi.string().allow(null, ""),
    }),
};
const signin = {
    body: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.required().custom(password),
    }),
};
module.exports = {
    signup,
    signin
}