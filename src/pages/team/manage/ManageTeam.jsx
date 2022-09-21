import React from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { EmployeeCard, NotFound } from "../../../components";
import { getTeam } from "../../../utils/DataUtils";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Formik } from "formik";
import { teamSchema } from "../../../constants/Validation";
import { Employees } from "../../../constants/EmployeeData";

const Load = ({ team }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2 className="pt-4 text-center pb-4">General Information</h2>

      <div className="w-50 mt-4 ms-auto me-auto">
        <Formik validationSchema={teamSchema} initialValues={team}>
          {({ handleChange, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group as={Row} controlId="name">
                <Form.Label column sm="2">
                  Team Name
                </Form.Label>
                <Col sm="10">
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <Form.Control
                      value={team.name}
                      aria-label="name"
                      aria-describedby="basic-addon1"
                      readOnly
                      disabled
                    />
                  </InputGroup>
                  <Form.Text muted>You can't change team name</Form.Text>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mt-3" controlId="description">
                <Form.Label column sm="2">
                  Description
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    name="description"
                    aria-label="description"
                    as="textarea"
                    placeholder="team description"
                    onChange={handleChange}
                    defaultValue={team.description}
                    isInvalid={
                      errors.description && errors.description.length < 250
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.description}
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button
                  size="md"
                  className="mt-4"
                  column
                  type="submit"
                  variant="primary"
                >
                  Save Changes
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const ManageTeam = () => {
  const { id } = useParams();
  const team = getTeam(id);

  if (!team) return <NotFound />;

  return <Load team={team} />;
};

export default ManageTeam;
