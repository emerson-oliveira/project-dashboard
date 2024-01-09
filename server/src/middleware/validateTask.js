const validate = require('./validate');
const { createTaskValidation, updateTaskValidation } = require('../validation');

const validateCreateTask = validate(createTaskValidation);
const validateUpdateTask = validate(updateTaskValidation);

module.exports = { validateCreateTask, validateUpdateTask };
