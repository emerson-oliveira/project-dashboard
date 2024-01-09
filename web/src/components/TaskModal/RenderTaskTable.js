import React from "react";
import { Button, Table, Form } from "react-bootstrap";

const renderTaskTable = ({
  tasks,
  handleUpdateTask,
  handleDeleteTask,
  projectId,
  setProjects,
  setSelectedProject,
}) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Título</th>
        <th>Descrição</th>
        <th>Prazo</th>
        <th>Completo</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      {tasks &&
        tasks.slice(0, 10).map((task) => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{new Date(task.dueDate).toLocaleDateString("pt-BR")}</td>
            <td>
              <Form.Check
                type="checkbox"
                checked={task.completed}
                onChange={() =>
                  handleUpdateTask(
                    projectId,
                    task.id,
                    {
                      completed: !task.completed,
                    },
                    setSelectedProject,
                    setProjects
                  )
                }
              />
            </td>
            <td>
              <Button
                variant="danger"
                onClick={() => {
                  handleDeleteTask(
                    projectId,
                    task.id,
                    setSelectedProject,
                    setProjects
                  );
                }}
              >
                Deletar
              </Button>
            </td>
          </tr>
        ))}
    </tbody>
  </Table>
);

export default renderTaskTable;
