const request = require('supertest');
const { app } = require('../../app');


let projectId;

describe('Testes das rotas de projetos', () => {

  test('POST /projects retorna um status 201', async () => {
    const newProject = {
      name: 'Novo Projeto',
      description: 'Descrição do Projeto',
      startDate: '2024-01-01T00:00:00.000Z',
    };
    const response = await request(app).post('/projects').send(newProject);
    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty('id');
    expect(response.body.data.name).toEqual(newProject.name);

    projectId = response.body.data.id;
  });

  test('GET /projects retorna um status 200', async () => {
    const response = await request(app).get('/projects');
    expect(response.statusCode).toBe(200);
  });

  test('GET /projects/:id retorna um status 200 para um projeto existente', async () => {
    const response = await request(app).get(`/projects/${projectId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.data).toHaveProperty('id');
    expect(response.body.data.id).toEqual(projectId);
  });

  test('PUT /projects/:id retorna um status 200 para um projeto atualizado com sucesso', async () => {
    const updatedProject = {
      name: 'Projeto Atualizado',
      description: 'Descrição Atualizada',
      startDate: '2024-01-01T00:00:00.000Z',
    };
    const response = await request(app).put(`/projects/${projectId}`).send(updatedProject);
    expect(response.statusCode).toBe(200);
    expect(response.body.data).toHaveProperty('id');
    expect(response.body.data.name).toEqual(updatedProject.name);
  });

  test('DELETE /projects/:id retorna um status 204 para um projeto deletado com sucesso', async () => {
    const response = await request(app).delete(`/projects/${projectId}`);
    expect(response.statusCode).toBe(204);
  });
});
