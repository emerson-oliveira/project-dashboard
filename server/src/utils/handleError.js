module.exports = function handleError(response, status, message) {
  const errorResponse = {
    status: 'error',
    message,
  };
  return response.status(status).json(errorResponse);
};
