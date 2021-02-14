import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [responseMessage, setResponseMessage] = useState([]);

  let history = useHistory();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangePassword2 = (e) => {
    setPassword2(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: name,
      email: email,
      password: password,
      password2: password2,
    };

    setResponseMessage([]);

    fetch("/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        const respMessage = data.message;
        respMessage.forEach((element) => {
          if (data.success) {
            setResponseMessage([element.message]);
            history.push({
              pathname: "/login",
              state: {
                message: responseMessage,
              },
            });
          } else {
            setResponseMessage([element.message]);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Card style={{ width: "18rem", margin: "auto" }}>
        <Card.Body>
          <h1>Registrer</h1>
          <p>
            {responseMessage.map((e) => (
              <li>{e}</li>
            ))}
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Navn</Form.Label>
              <Form.Control
                type="text"
                id="name"
                name="name"
                placeholder="Ditt navn her.."
                value={name}
                onChange={handleChangeName}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Epost</Form.Label>
              <Form.Control
                type="text"
                id="email"
                name="email"
                placeholder="Din epost her.."
                value={email}
                onChange={handleChangeEmail}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Passord</Form.Label>
              <Form.Control
                type="password"
                id="password"
                name="password"
                placeholder="Ditt passord her.."
                value={password}
                onChange={handleChangePassword}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Skriv passord igjen</Form.Label>
              <Form.Control
                type="password"
                id="password2"
                name="password2"
                placeholder="Ditt passord her.."
                value={password2}
                onChange={handleChangePassword2}
                required
              />
            </Form.Group>
            <Button
              type="submit"
              value="register"
              className="mr-2 btn btn-primary"
            >
              Registrer
            </Button>
            <Link to="/login">Allerede registrert?</Link>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
