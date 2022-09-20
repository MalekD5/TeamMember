import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { Employees } from "../../constants/EmployeeData";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { EmployeeCard } from "../../components";

import "./Home.css";

const Content = () => {
  const [job, setJob] = useState("all");
  const [content, setContent] = useState({});

  const handleClose = () => setContent({});
  const handleJobChange = (title) => {
    if (title === job) return;

    setJob(title);
  };

  return (
    <main>
      <h1 className="text-center">Content</h1>

      <Stack
        className="justify-content-center mb-4"
        direction="horizontal"
        gap={2}
      >
        <Button onClick={() => handleJobChange("all")}>All</Button>
        <Button onClick={() => handleJobChange("frontend")}>Frontend</Button>
        <Button onClick={() => handleJobChange("backend")}>Backend</Button>
        <Button onClick={() => handleJobChange("devops")}>Devops</Button>
      </Stack>

      <Container
        fluid="sm"
        className="justify-content-center align-items-center"
      >
        <Row md={3}>
          {job === "all"
            ? Employees.map((e) => (
                <Col key={e.name} md={3}>
                  <EmployeeCard e={e} setContent={setContent} />
                </Col>
              ))
            : Employees.filter((a) => a.job.toLowerCase().includes(job)).map(
                (e) => (
                  <Col key={e.name} md={3}>
                    <EmployeeCard e={e} setContent={setContent} />
                  </Col>
                )
              )}
        </Row>
      </Container>

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

export default Content;
