import React from "react";
import { Table, Button, Row } from "react-bootstrap";
import { paginationStyles } from "../style";
import ReactPaginate from "react-paginate";

const ProjectTable = ({
  projects,
  currentPage,
  totalPages,
  handleOpenModal,
  setCurrentPage,
}) => (
  <>
    <Table striped bordered hover>
      <thead>
        <tr className="">
          <th>#</th>
          <th>Nome do Projeto</th>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(projects) &&
          projects.slice(0, 10).map((project, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => handleOpenModal(project)}
                >
                  Ver Tarefas
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
    {projects && (totalPages > 1) &&(
      <>
        <style jsx global>
          {paginationStyles}
        </style>
        <ReactPaginate
          previousLabel={"anterior"}
          nextLabel={"próximo"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={totalPages}
          marginPagesDisplayed={5}
          pageRangeDisplayed={5}
          onPageChange={({ selected }) => setCurrentPage(selected)}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </>
    )}
  </>
);

export default ProjectTable;
