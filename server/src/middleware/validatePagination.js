const validate = require('./validate');
const { paginationValidation } = require('../validation');

const validatePagination = validate(paginationValidation);

module.exports = validatePagination;
