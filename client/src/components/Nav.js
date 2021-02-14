import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Navbar.Toggle />

      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Link to="/login">
            <FontAwesomeIcon icon={faUserCircle} />
          </Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
