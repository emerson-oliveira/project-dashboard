const Joi = require('joi');

const updateTaskValidation = Joi.object({
  title: Joi.string().min(1).max(255).optional(),
  description: Joi.string().allow('').max(500).optional(),
  dueDate: Joi.date().iso().optional(),
  completed: Joi.boolean().optional(),
});

module.exports = updateTaskValidation;
