import React from "react";
import { Button, Card } from "react-bootstrap";

const EmployeeCard = ({ e, setContent }) => {
  return (
    <Card className="home-card text-center">
      <Card.Header>{e.job}</Card.Header>
      <Card.Body>
        <Card.Title>{e.name}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Button variant="success" onClick={() => setContent(e)}>
          Show data
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default EmployeeCard;
