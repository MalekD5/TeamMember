import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { Employees } from "../../constants/EmployeeData";
import { Col, Row } from "react-bootstrap";
import { EmployeeCard } from "../../components";

const Employee = () => {
  const [content, setContent] = useState({});

  const handleClose = () => setContent({});

  return (
    <main>
      <h1 className="text-center text-primary mt-4 mb-4">Employees</h1>

      <Row
        xs={1}
        md={3}
        className="g-1 ms-auto me-auto w-50 justify-content-start"
      >
        {Employees.map((e, index) => (
          <Col key={e.name}>
            <EmployeeCard e={e} num={index + 1} setContent={setContent} />
          </Col>
        ))}
      </Row>

      <Modal show={Object.keys(content).length !== 0} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{content.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {content.experience
              ? `years of experience: ${content.experience.years}`
              : ""}{" "}
            <br></br>
            frameworks of experience:{" "}
            <i>
              {content.experience
                ? content.experience.frameworks.join(", ")
                : ""}
            </i>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
};

export default Employee;
