import { deleteTask, updateTask, addTask } from "./api";

export const handleOpenModal = (project, setSelectedProject, setShowModal) => {
  setSelectedProject(project);
  setShowModal(true);
};

export const handleCloseModal = (setSelectedProject, setShowModal) => {
  setSelectedProject(null);
  setShowModal(false);
};

export const handleAddProject = async (
  newProject,
  newDescription,
  newStartDate,
  addProject,
  setProjects,
  projects
) => {
  const projectData = {
    name: newProject,
    description: newDescription,
    startDate: newStartDate,
  };

  try {
    const response = await addProject(projectData);
    if (response.status === 201) {
      setProjects(projects ? [projectData, ...projects] : [projectData]);
    } else {
      console.error("Erro ao criar o projeto :", response);
    }
  } catch (error) {
    console.error("Erro ao criar o projeto:", error);
  }
};

export const handleDeleteTask = async (
  projectId,
  taskId,
  setSelectedProject,
  setProjects
) => {
  try {
    const response = await deleteTask({ projectId, taskId });

    if (response.status === 204) {
      console.log(setSelectedProject);
      console.log(setProjects);
      setSelectedProject((selectedProject) => {
        return {
          ...selectedProject,
          tasks: selectedProject.tasks?.filter((task) => task.id !== taskId),
        };
      });

      setProjects((oldProjects) => {
        return oldProjects.map((project) => {
          if (project.id === projectId) {
            return {
              ...project,
              tasks: project.tasks?.filter((task) => task.id !== taskId),
            };
          } else {
            return project;
          }
        });
      });
    } else {
      console.error("Erro ao deletar a tarefa:", response);
    }
  } catch (error) {
    console.error("Erro ao deletar a tarefa:", error);
  }
};

export const handleUpdateTask = async (
  projectId,
  taskId,
  taskData,
  setSelectedProject,
  setProjects
) => {
  try {
    const response = await updateTask({ projectId, taskId, taskData });
    if (response.status === 200) {
      setSelectedProject((selectedProject) => {
        return {
          ...selectedProject,
          tasks: selectedProject.tasks?.map((task) =>
            task.id === taskId ? response.data?.data : task
          ),
        };
      });

      setProjects((oldProjects) => {
        console.log("oldProjects");
        console.log(oldProjects);
        return oldProjects.map((project) => {
          if (project.id === projectId) {
            return {
              ...project,
              tasks: project.tasks?.map((task) =>
                task.id === taskId ? response.data?.data : task
              ),
            };
          } else {
            return project;
          }
        });
      });
    } else {
      console.error("Erro ao atualizar a tarefa:", response);
    }
  } catch (error) {
    console.error("Erro ao atualizar a tarefa:", error);
  }
};

export const handleAddTask = async (
  projectId,
  taskData,
  setSelectedProject,
  setProjects,
  selectedProject
) => {
  try {
    console.log(projectId, taskData);
    const response = await addTask(projectId, taskData);
    if (response.status === 201) {
      setSelectedProject({
        ...selectedProject,
        tasks: Array.isArray(selectedProject.tasks)
          ? [response.data?.data, ...selectedProject.tasks]
          : [response.data?.data],
      });

      setProjects((oldProjects) => {
        return oldProjects.map((project) => {
          if (project.id === projectId) {
            return {
              ...project,
              tasks: Array.isArray(project.tasks)
                ? [response.data?.data, ...project.tasks]
                : [response.data?.data],
            };
          } else {
            return project;
          }
        });
      });
    } else {
      console.error("Erro ao adicionar a tarefa:", response);
    }
  } catch (error) {
    console.error("Erro ao adicionar a tarefa:", error);
  }
};

export const handleGetProjects = async (
  currentPage,
  setProjects,
  setTotalPages,
  setCurrentPage,
  setNewProject
) => {
  try {
    const { data: projects, meta } = await getProjects(currentPage);

    setProjects(projects);
    setTotalPages(meta?.totalPages);
    setCurrentPage(meta?.currentPage);
  } catch (error) {
    console.error("Erro ao buscar os projetos:", error);
  }
};
