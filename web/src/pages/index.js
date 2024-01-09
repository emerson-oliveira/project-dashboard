// pages/index.js
import React, { useState, useEffect } from "react";
import { NextPage, GetServerSideProps } from "next";
import {
  getProjects,
  addProject,
  handleOpenModal,
  handleCloseModal,
  handleAddProject,
  handleDeleteTask,
  handleUpdateTask,
  handleAddTask,
} from "../services";
import { ProjectForm, ProjectTable, TaskModal } from "../components";

const Home = ({ initialProjects, initialTotalPages, initialCurrentPage }) => {
  const [projects, setProjects] = useState(initialProjects);
  const [currentPage, setCurrentPage] = useState(initialCurrentPage);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [newProject, setNewProject] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newStartDate, setNewStartDate] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
        const { data: projects, meta } = await getProjects(currentPage);
        
        if(!!meta){
          setTotalPages(meta?.totalPages);
          setCurrentPage(meta?.currentPage);
        }

        setProjects(projects);

    };
    fetchProjects();
  }, [currentPage, setNewProject, setProjects]);

  return (
    <div>
      <ProjectForm
        newProject={newProject}
        setNewProject={setNewProject}
        newDescription={newDescription}
        setNewDescription={setNewDescription}
        newStartDate={newStartDate}
        setNewStartDate={setNewStartDate}
        handleAddProject={() =>
          handleAddProject(
            newProject,
            newDescription,
            newStartDate,
            addProject,
            setProjects,
            projects,
            setNewProject,
            setNewDescription,
            setNewStartDate
          )
        }
      />

      <ProjectTable
        projects={projects}
        currentPage={currentPage}
        totalPages={totalPages}
        handleOpenModal={(project) =>
          handleOpenModal(project, setSelectedProject, setShowModal)
        }
        setCurrentPage={setCurrentPage}
      />

      <TaskModal
        showModal={showModal}
        handleCloseModal={() =>
          handleCloseModal(setSelectedProject, setShowModal)
        }
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        setProjects={setProjects}
        handleDeleteTask={(projectId, taskId) =>
          handleDeleteTask(projectId, taskId, setSelectedProject, setProjects)
        }
        handleUpdateTask={(projectId, taskId, taskData) =>
          handleUpdateTask(
            projectId,
            taskId,
            taskData,
            setSelectedProject,
            setProjects,
            selectedProject
          )
        }
        handleAddTask={(projectId, taskData) =>
          handleAddTask(
            projectId,
            taskData,
            setSelectedProject,
            setProjects,
            selectedProject
          )
        }
      />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
    const {
      data: projects,
      meta,
    } = await getProjects();

    return {
      props: {
        initialProjects: projects,
        initialTotalPages: meta?.totalPages,
        initialCurrentPage: meta?.currentPage,
      },
    };
};
