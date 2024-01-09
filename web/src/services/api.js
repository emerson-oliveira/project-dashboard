import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export const getProjects = async (page = 1, limit = 5) => {
  const { data } = await api.get(`/projects?page=${page}&limit=${limit}`);
  return data;
};

export const getProject = async (projectId) => {
  console.log(projectId);
  const { data } = await api.get(`/projects/${projectId}`);
  return data;
};

export const addProject = async (projectData) => {
  console.log(projectData);
  const response = await api.post("/projects", projectData);
  return response;
};

export const deleteTask = async ({ projectId, taskId }) => {
  const response = await api.delete(`/projects/${projectId}/tasks/${taskId}`);
  return response;
};

export const updateTask = async ({ projectId, taskId, taskData }) => {
  const response = await api.put(
    `/projects/${projectId}/tasks/${taskId}`,
    taskData
  );
  return response;
};

export const addTask = async (projectId, taskData) => {
  const response = await api.post(`/projects/${projectId}/tasks`, taskData);
  return response;
};

export default api;
