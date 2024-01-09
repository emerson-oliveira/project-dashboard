const { createProject, getProjects, getProject, updateProject, deleteProject } = require('./projectController');
const { createTask, getTasks, getTask, updateTask, deleteTask } = require('./taskController');

module.exports = {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
};
