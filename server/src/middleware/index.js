const { validateCreateProject, validateUpdateProject } = require('./validateProject');
const { validateCreateTask, validateUpdateTask } = require('./validateTask');
const validatePagination = require('./validatePagination');

module.exports = {
  validateCreateProject,
  validateUpdateProject,
  validateCreateTask,
  validateUpdateTask,
  validatePagination,
};
