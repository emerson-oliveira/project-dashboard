const prisma = require('../db');
const handleError = require('../utils/handleError');

const createTask = async (request, response) => {
  try {
    const { projectId } = request.params;
    const { title, description, dueDate } = request.body;

    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!project) {
      return handleError(response, 404, 'Projeto não encontrado');
    }

    if (!title || !description || !dueDate) {
      return handleError(response, 400, 'Dados da tarefa inválidos');
    }

    const task = await prisma.task.create({
      data: {
        projectId,
        title,
        description,
        dueDate: new Date(dueDate),
      },
    });

    return response.status(201).json({ status: 'success', message: 'Tarefa criada com sucesso', data: task });
  } catch (error) {
    return handleError(response, 500, 'Erro ao criar tarefa');
  }
};

const getTasks = async (request, response) => {
  try {
    const { projectId } = request.params;
    const { page = 1, limit = 10 } = request.query;

    if (!projectId) {
      return handleError(response, 400, 'O projectId é obrigatório');
    }

    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!project) {
      return handleError(response, 404, 'Projeto não encontrado');
    }

    const tasks = await prisma.task.findMany({
      where: {
        projectId,
      },
      orderBy: {
        dueDate: 'desc',
      },
      skip: (page - 1) * limit,
      take: parseInt(limit, 10),
    });

    return response.json({ status: 'success', message: 'Consulta realizada com sucesso', data: tasks });
  } catch (error) {
    return handleError(response, 500, 'Erro ao buscar tarefas');
  }
};

const getTask = async (request, response) => {
  try {
    const { id } = request.params;

    const task = await prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      return handleError(response, 404, 'Tarefa não encontrada');
    }

    return response.json({ status: 'success', message: 'Tarefa recuperada com sucesso', data: task });
  } catch (error) {
    return handleError(response, 500, 'Erro ao buscar tarefa');
  }
};

const updateTask = async (request, response) => {
  try {
    const { projectId, id } = request.params;
    const { title, description, dueDate, completed } = request.body;

    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!project) {
      return handleError(response, 404, 'Projeto não encontrado');
    }

    const task = await prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      return handleError(response, 404, 'Tarefa não encontrada');
    }

    const data = {};
    if (title !== undefined) data.title = title;
    if (description !== undefined) data.description = description;
    if (dueDate !== undefined) data.dueDate = new Date(dueDate);
    if (completed !== undefined) data.completed = completed;

    const updatedTask = await prisma.task.update({
      where: { id },
      data,
    });

    return response.json({ status: 'success', message: 'Tarefa atualizada com sucesso', data: updatedTask });
  } catch (error) {
    return handleError(response, 500, 'Erro ao atualizar tarefa');
  }
};


const deleteTask = async (request, response) => {
  try {
    const { id } = request.params;

    const task = await prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      return handleError(response, 404, 'Tarefa não encontrada');
    }

    await prisma.task.delete({
      where: { id },
    });

    return response.status(204).json({ status: 'success', message: 'Tarefa excluída com sucesso' });
  } catch (error) {
    return handleError(response, 500, 'Erro ao deletar tarefa');
  }
};

module.exports = {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
};
