const Joi = require('joi');

const createTaskValidation = Joi.object({
  title: Joi.string().min(1).max(255).required().messages({
    'string.empty': 'O título é obrigatório.',
    'string.min': 'O título deve ter pelo menos {#limit} caracteres.',
    'string.max': 'O título deve ter no máximo {#limit} caracteres.',
    'any.required': 'O título é obrigatório.',
  }),
  description: Joi.string().allow('').max(500).messages({
    'string.max': 'A descrição deve ter no máximo {#limit} caracteres.',
  }),
  dueDate: Joi.date().iso().required().messages({
    'date.format': 'A data de conclusão deve estar no formato ISO 8601.',
    'any.required': 'A data de conclusão é obrigatória.',
  }),
  completed: Joi.boolean().default(false),
});

module.exports = createTaskValidation;
