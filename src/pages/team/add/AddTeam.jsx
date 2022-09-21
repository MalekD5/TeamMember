import { Formik } from "formik";
import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { teamSchema } from "../../../constants/Validation";
import { getStorageValue } from "../../../hooks/LocalStorageHook";
import { createTeam, getTeam } from "../../../utils/DataUtils";
import { useNavigate } from "react-router-dom";

const AddTeam = () => {
  const navigate = useNavigate();
  const [exists, setExists] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) return;

    const name = form.name.value;
    const teams = getStorageValue("teams", []);
    if (getTeam(name)) {
      setExists(true);
      return;
    }

    createTeam(form, teams);
    setExists(false);
    navigate(`/teams/${name}`);
  };

  return (
    <>
      <h1 className="mt-4 text-center">Add a Team</h1>
      <div className="mt-4 w-50 ms-auto me-auto">
        <Formik
          validationSchema={teamSchema}
          onSubmit={handleSubmit}
          initialValues={{
            name: "",
            description: "",
            date: new Date(),
            members: [],
          }}
        >
          {({ handleChange, errors }) => (
            <>
              {exists && (
                <Alert variant="danger">This team already exists!</Alert>
              )}
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="teamName">
                  <Form.Label>Team Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="name"
                    placeholder="team name"
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-4" controlId="description">
                  <Form.Label>Team Description</Form.Label>
                  <Form.Control
                    name="description"
                    as="textarea"
                    placeholder="team description"
                    onChange={handleChange}
                    isInvalid={
                      errors.description && errors.description.length < 250
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.description}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Create
                </Button>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AddTeam;
