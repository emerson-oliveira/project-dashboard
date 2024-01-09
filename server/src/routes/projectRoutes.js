const express = require('express');
const { validateCreateProject, validateUpdateProject, validatePagination } = require('../middleware');
const { createProject, getProjects, getProject, updateProject, deleteProject } = require('../controllers');

const router = express.Router();

router.post('/', validateCreateProject, createProject);
router.get('/', validatePagination, getProjects);
router.get('/:id', getProject);
router.put('/:id', validateUpdateProject, updateProject);
router.delete('/:id', deleteProject);

module.exports = router;
