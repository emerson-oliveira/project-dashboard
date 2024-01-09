const Joi = require('joi');

const createProjectValidation = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'O nome é obrigatório.',
    'any.required': 'O nome é obrigatório.',
  }),
  description: Joi.string().empty(''),
  startDate: Joi.date().iso().required().messages({
    'date.format': 'A data de início deve estar no formato ISO 8601.',
    'any.required': 'A data de início é obrigatória.',
  }),
});

module.exports = createProjectValidation;
