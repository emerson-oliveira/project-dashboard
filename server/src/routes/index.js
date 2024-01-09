const express = require('express');
const projectRoutes = require('./projectRoutes');
const taskRoutes = require('./taskRoutes');

const router = express.Router();

router.use('/projects', projectRoutes);
router.use('/projects', taskRoutes);

module.exports = router;
