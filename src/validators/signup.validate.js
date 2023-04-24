const Joi = require('joi');
const { StatusCodes } = require("http-status-codes");

const userSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'Please enter a valid email address',
    'any.required': 'Email is required'
  }),
  first_name: Joi.string().trim().pattern(/^[a-zA-Z]+$/).max(50).optional().required().messages({
    'string.trim': 'Please enter a valid first name',
    'string.pattern.base': 'First name should only contain alphabets',
    'string.max': 'First name should not exceed 50 characters'
  }),
  last_name: Joi.string().trim().pattern(/^[a-zA-Z]+$/).max(50).optional().required().messages({
    'string.trim': 'Please enter a valid last name',
    'string.pattern.base': 'Last name should only contain alphabets',
    'string.max': 'Last name should not exceed 50 characters'
  }),
  phone_number: Joi.string().pattern(/^\+?[0-9]+$/).optional().required().messages({
    'string.pattern.base': 'Please enter a valid phone number'
  }),
  gender: Joi.string().valid('male', 'female', 'other').optional().required().messages({
    'any.only': 'Please select a valid gender'
  }),
  country: Joi.string().trim().max(50).optional().required().messages({
    'string.max': 'Country should not exceed 50 characters'
  }),
  state: Joi.string().trim().max(50).optional().required().messages({
    'string.max': 'State should not exceed 50 characters'
  }),
  date_of_birth: Joi.date().max('now').min('1900-01-01').required()
});

function validateUser(req, res, next) {
  const { error, value } = userSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      error: error.details.map(err => err.message)
    });
  }
  next();
}


module.exports = validateUser;