import React from "react";
import { Form, Button, Col } from "react-bootstrap";

const ProjectForm = ({
  newProject,
  setNewProject,
  newDescription,
  setNewDescription,
  newStartDate,
  setNewStartDate,
  handleAddProject,
}) => (
  <Col className="d-flex justify-content-center my-5">
    <Form className="row mb-3">
      <Form.Group controlId="formBasicEmail" className="col-auto">
        <Form.Label>Nome do Projeto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite o nome do projeto"
          value={newProject}
          onChange={(e) => setNewProject(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicDescription" className="col-auto">
        <Form.Label>Descrição do Projeto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite a descrição do projeto"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicStartDate" className="col-auto">
        <Form.Label>Data de Início</Form.Label>
        <Form.Control
          type="date"
          value={newStartDate}
          onChange={(e) => setNewStartDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group
        controlId="formBasicStartDate"
        className="col-auto d-flex align-items-end"
      >
        <Button
          variant="primary"
          className="btn btn-primary"
          onClick={handleAddProject}
        >
          Adicionar Projeto
        </Button>
      </Form.Group>
    </Form>
  </Col>
);
export default ProjectForm;
