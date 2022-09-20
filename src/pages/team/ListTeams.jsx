import React from "react";
import { Button, Card, Form, InputGroup, Stack } from "react-bootstrap";

const TeamView = () => {
  return (
    <div>
      <h1 className="mt-4 mb-4 text-center">Teams</h1>
      <div className="w-50 ms-auto me-auto">
        <Stack className="mt-2" direction="horizontal" gap={3}>
          <Form.Control
            onChange={(e) => console.log(e.target.value)}
            placeholder="Search for team..."
          />
          <Button variant="danger">Reset</Button>
          <div className="vr" />
          <Button variant="outline-primary">Create</Button>
        </Stack>
        <Stack gap={0} direction="vertical" className="mt-3">
          <Card bg="light" className="w-100" border="dark">
            <Card.Body>
              <Stack direction="horizontal" gap={2}>
                <InputGroup.Text>@</InputGroup.Text>
                <h4 className="w-100">ID2R</h4>
                <Button variant="success" className="ms-auto border">
                  Edit
                </Button>
                <div className="vr"></div>
                <Button variant="danger" className="ms-auto border">
                  Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
          <Card bg="light" className="w-100" border="dark">
            <Card.Body>
              <Stack direction="horizontal" gap={2}>
                <InputGroup.Text>@</InputGroup.Text>
                <h4 className="w-100">ID2Raaaa</h4>
                <Button variant="success" className="ms-auto border">
                  Edit
                </Button>
                <div className="vr"></div>
                <Button variant="danger" className="ms-auto border">
                  Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        </Stack>
      </div>
    </div>
  );
};

export default TeamView;
