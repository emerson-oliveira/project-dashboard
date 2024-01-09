const express = require('express');
const { validateCreateTask, validateUpdateTask, validatePagination } = require('../middleware');
const { createTask, getTasks, getTask, updateTask, deleteTask } = require('../controllers');

const router = express.Router();

router.post('/:projectId/tasks', validateCreateTask, createTask);
router.get('/:projectId/tasks', validatePagination, getTasks);
router.get('/:projectId/tasks/:id', getTask);
router.put('/:projectId/tasks/:id', validateUpdateTask, updateTask);
router.delete('/:projectId/tasks/:id', deleteTask);

module.exports = router;
