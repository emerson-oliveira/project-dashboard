import React, { useState, useEffect } from "react";
import { Col, Modal, Button, Form, Alert } from "react-bootstrap";
import renderTaskTable from "./RenderTaskTable";

const TaskModal = ({
  showModal,
  handleCloseModal,
  selectedProject,
  handleDeleteTask,
  handleUpdateTask,
  handleAddTask,
  setProjects,
  setSelectedProject,
}) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [newTaskDueDate, setNewTaskDueDate] = useState("");
  const [taskAdded, setTaskAdded] = useState(false);

  useEffect(() => {
    if (taskAdded) {
      const timer = setTimeout(() => setTaskAdded(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [taskAdded]);

  const handleNewTaskSubmit = async () => {
    const newTaskData = {
      title: newTaskTitle,
      description: newTaskDescription,
      dueDate: newTaskDueDate,
    };
    handleAddTask(
      selectedProject.id,
      newTaskData,
      setSelectedProject,
      setProjects,
      selectedProject
    );
    setTaskAdded(true);
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>
          Tarefas do Projeto {`: ${selectedProject?.name}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {taskAdded && (
          <Alert variant="success">Tarefa adicionada com sucesso!</Alert>
        )}

        {selectedProject &&
        selectedProject.tasks &&
        selectedProject.tasks.length > 0 ? (
          renderTaskTable({
            tasks: selectedProject.tasks,
            handleUpdateTask,
            handleDeleteTask,
            projectId: selectedProject.id,
            setSelectedProject,
            setProjects,
          })
        ) : (
          <p>Nenhuma tarefa encontrada para este projeto.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Col className="d-flex justify-content-center">
          <Form className="row">
            <Form.Group controlId="formTaskTitle" className="col-auto">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o título da tarefa"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formTaskDescription" className="col-auto ">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite a descrição da tarefa"
                value={newTaskDescription}
                onChange={(e) => setNewTaskDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formTaskDueDate" className="col-auto">
              <Form.Label>Prazo</Form.Label>
              <Form.Control
                type="date"
                value={newTaskDueDate}
                onChange={(e) => setNewTaskDueDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              controlId="formTaskDueDate"
              className="col-auto d-flex align-items-end"
            >
              <Button
                variant="secondary"
                onClick={handleCloseModal}
                className="mx-3"
              >
                Fechar
              </Button>
              <Button variant="primary" onClick={handleNewTaskSubmit}>
                Adicionar Tarefa
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskModal;
