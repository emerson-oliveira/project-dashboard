const request = require('supertest');
const { app } = require('../../app');


let projectId;
let taskId;

describe('Testes das rotas de tarefas', () => {

  beforeAll(async () => {
    const newProject = {
      name: 'Novo Projeto',
      description: 'Descrição do Projeto',
      startDate: '2024-01-01T00:00:00.000Z',
    };
    const response = await request(app).post('/projects').send(newProject);
    projectId = response.body.data.id;
  });

  afterAll(async () => {
    await request(app).delete(`/projects/${projectId}`);
  });

  test('POST /projects/:projectId/tasks retorna um status 201', async () => {
    const newTask = {
      title: 'Nova Tarefa',
      description: 'Descrição da Tarefa',
      dueDate: '2024-01-01T00:00:00.000Z',
    };

    const response = await request(app).post(`/projects/${projectId}/tasks`).send(newTask);
    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('id');
    expect(response.body.data.title).toEqual(newTask.title);

    taskId = response.body.data.id;
  });

  test('POST /projects/:projectId/tasks retorna um status 400 para dados inválidos', async () => {
    const invalidTask = {
      title: '',
      description: 'Descrição da Tarefa',
      dueDate: '2024-01-01T00:00:00.000Z',
    };
    const response = await request(app).post(`/projects/${projectId}/tasks`).send(invalidTask);
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('status', 'error');
  });

  test('GET /tasks retorna um status 200', async () => {
    const response = await request(app).get(`/projects/${projectId}/tasks`);
    expect(response.statusCode).toBe(200);
  });

  test('GET /projects/:projectId/tasks/:id retorna um status 200 para uma tarefa existente', async () => {
    const response = await request(app).get(`/projects/${projectId}/tasks/${taskId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.data).toHaveProperty('id');
    expect(response.body.data.id).toEqual(taskId);
  });

  test('GET /tasks/:id retorna um status 404 para uma tarefa inexistente', async () => {
    const response = await request(app).get(`/projects/${projectId}/tasks/id-inexistente`);
    expect(response.statusCode).toBe(404);
    expect(response.body).toHaveProperty('status', 'error');
  });

  test('PUT /tasks/:id retorna um status 200 para uma tarefa existente', async () => {
    const updatedTask = {
      title: 'Tarefa Atualizada',
      description: 'Descrição Atualizada',
      dueDate: '2024-01-01T00:00:00.000Z',
    };
    const response = await request(app).put(`/projects/${projectId}/tasks/${taskId}`).send(updatedTask);
    expect(response.statusCode).toBe(200);
    expect(response.body.data).toHaveProperty('id');
    expect(response.body.data.title).toEqual(updatedTask.title);
  });

  test('PUT /tasks/:id retorna um status 404 para uma tarefa inexistente', async () => {
    const updatedTask = {
      title: 'Tarefa Atualizada',
      description: 'Descrição Atualizada',
      dueDate: '2024-01-01T00:00:00.000Z',
    };
    const response = await request(app).put(`/projects/${projectId}/tasks/id-inexistente`).send(updatedTask);
    expect(response.statusCode).toBe(404);
    expect(response.body).toHaveProperty('status', 'error');
  });

  test('DELETE /tasks/:id retorna um status 404 para uma tarefa inexistente', async () => {
    const response = await request(app).delete(`/projects/${projectId}/tasks/id-inexistente`);
    expect(response.statusCode).toBe(404);
    expect(response.body).toHaveProperty('status', 'error');
  });

  test('DELETE /tasks/:id retorna um status 204 para uma tarefa existente', async () => {
    const response = await request(app).delete(`/projects/${projectId}/tasks/${taskId}`);
    expect(response.statusCode).toBe(204);
  });
});
