const validate = require('./validate');
const { createProjectValidation, updateProjectValidation } = require('../validation');

const validateCreateProject = validate(createProjectValidation);
const validateUpdateProject = validate(updateProjectValidation);

module.exports = { validateCreateProject, validateUpdateProject };
