const Joi = require('joi');

const paginationValidation = Joi.object({
  page: Joi.number().integer().min(1).optional(),
  limit: Joi.number().integer().min(1).optional(),
});

module.exports = paginationValidation;
