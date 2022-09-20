import React from "react";
import { Button, Card, InputGroup, Stack } from "react-bootstrap";

const TeamCard = ({ name, editAction, removeAction }) => {
  return (
    <Card bg="light" className="w-100 mb-3" border="dark">
      <Card.Body>
        <Stack direction="horizontal" gap={2}>
          <InputGroup.Text>@</InputGroup.Text>
          <h4 className="w-100">{name}</h4>
          <Button
            onClick={() => editAction(name)}
            variant="success"
            className="ms-auto border"
          >
            Edit
          </Button>
          <div className="vr"></div>
          <Button
            onClick={() => removeAction(name)}
            variant="danger"
            className="ms-auto border"
          >
            Delete
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default TeamCard;
