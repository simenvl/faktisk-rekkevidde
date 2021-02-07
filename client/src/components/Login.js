import React from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Card style={{ width: "18rem", margin: "auto" }}>
        <Card.Body>
          <h1>Login</h1>
          <Form>
            <Form.Group>
              <Form.Label>Epost</Form.Label>
              <Form.Control
                type="text"
                placeholder="Din epost her.."
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Passord</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ditt passord her.."
                required
              />
              <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </Form.Text>
            </Form.Group>
            <Button type="submit" className="mr-2 btn btn-primary">
              Login
            </Button>
            <Link to="/register">Register</Link>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
