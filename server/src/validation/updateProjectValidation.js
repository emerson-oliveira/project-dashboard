const Joi = require('joi');

const updateProjectValidation = Joi.object({
  name: Joi.string().optional(),
  description: Joi.string().empty('').optional(),
  startDate: Joi.date().iso().optional(),
});

module.exports = updateProjectValidation;
