const prisma = require('../db');
const handleError = require('../utils/handleError');

const checkUnfinishedTasks = async (projectId) => {
  const unfinishedTask = await prisma.task.findFirst({
    where: {
      projectId,
      completed: false,
    },
  });

  return unfinishedTask !== null;
};

const createProject = async (request, response) => {
  try {
    const { name, description, startDate } = request.body;

    const project = await prisma.project.create({
      data: {
        name,
        description,
        startDate: new Date(startDate),
      },
    });

    return response.status(201).json({ status: 'success', message: 'Projeto criado com sucesso', data: project });
  } catch (error) {
    return handleError(response, 500, 'Erro ao criar projeto');
  }
};

const getProjects = async (request, response) => {
  try {
    const { page = 1, limit = 10 } = request.query;

    const totalProjects = await prisma.project.count();
    const totalPages = Math.ceil(totalProjects / limit);

    const projects = await prisma.project.findMany({
      include: {
        tasks: {
          orderBy: {
            dueDate: 'asc',
          },
        },
      },
      skip: (page - 1) * limit,
      take: parseInt(limit, 10),
    });

    if (!projects || projects.length === 0) {
      return response.json({
        status: 'Nenhum projeto encontrado',
        message: 'Consulta realizada com sucesso',
        data: [],
        meta: {
          totalProjects,
          totalPages,
          currentPage: 1,
        },
      });
    }

    return response.json({
      status: 'success',
      message: 'Consulta realizada com sucesso',
      data: projects,
      meta: {
        totalProjects,
        totalPages,
        currentPage: page,
      },
    });
  } catch (error) {
    return handleError(response, 500, 'Erro ao buscar projetos', error);
  }
};

const getProject = async (request, response) => {
  try {
    const { id } = request.params;

    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        tasks: {
          orderBy: {
            dueDate: 'asc',
          },
        },
      },
    });

    if (!project) {
      return handleError(response, 404, 'Projeto não encontrado');
    }

    return response.json({ status: 'success', message: 'Projeto recuperado com sucesso', data: project });
  } catch (error) {
    return handleError(response, 500, 'Erro ao buscar projeto', error);
  }
};

const updateProject = async (request, response) => {
  try {
    const { id } = request.params;
    const { name, description, startDate } = request.body;

    if (!name || !description || !startDate) {
      return handleError(response, 400, 'Dados do projeto inválidos');
    }

    const project = await prisma.project.update({
      where: { id },
      data: { name, description, startDate: new Date(startDate) },
    });

    if (!project) {
      return handleError(response, 404, 'Projeto não encontrado');
    }

    return response.json({ status: 'success', message: 'Projeto atualizado com sucesso', data: project });
  } catch (error) {
    return handleError(response, 500, 'Erro ao atualizar projeto');
  }
};

const deleteProject = async (request, response) => {
  try {
    const { id } = request.params;

    if (await checkUnfinishedTasks(id)) {
      return handleError(response, 400, 'Não é possível excluir projetos que tenham tarefas sem concluir');
    }

    const project = await prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      return handleError(response, 404, 'Projeto não encontrado');
    }

    await prisma.task.deleteMany({
      where: { projectId: id },
    });

    await prisma.project.delete({
      where: { id },
    });

    return response
      .status(204)
      .json({ status: 'success', message: 'Projeto e suas tarefas foram excluídos com sucesso' });
  } catch (error) {
    return handleError(response, 500, 'Erro ao deletar projeto');
  }
};

module.exports = {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
};
