const express = require('express');
const cors = require('cors');
const routes = require('./routes');

require('express-async-errors');
require('dotenv/config');

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
);

app.use(routes);

app.use((err, request, response) => {
  if (err instanceof Error) {
    return response.status(400).json({
      message: err.message,
    });
  }
  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err}`,
  });
});

module.exports = { app };
