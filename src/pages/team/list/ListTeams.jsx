import React from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { useLocalStorage } from "../../../hooks/LocalStorageHook";

const TeamView = () => {
  const [teams, setTeams] = useLocalStorage("teams", []);

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
      </div>
    </div>
  );
};

export default TeamView;
