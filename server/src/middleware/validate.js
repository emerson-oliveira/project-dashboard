const validate = (schema) => (request, response, next) => {
  const { error } = schema.validate(request.body);
  if (error?.details?.[0] !== undefined) {
    return response.status(400).json({ status: 'error', message: error.details[0].message });
  }
  next();
  return undefined;
};

module.exports = validate;
