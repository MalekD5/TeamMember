import React from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";

const EmployeeCard = ({ e, num, setContent }) => {
  return (
    <Card bg="light" border="dark" className="home-card text-center">
      <Card.Body>
        <Card.Title>{e.name}</Card.Title>
        <Card.Text className="text-muted">{e.job}</Card.Text>
        <ButtonGroup aria-label="Employee Buttons">
          <Button variant="primary">Teams</Button>
          <Button variant="secondary">Info</Button>
          <Button variant="danger">delete</Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default EmployeeCard;
