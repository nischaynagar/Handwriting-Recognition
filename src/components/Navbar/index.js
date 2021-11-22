import React from "react";
import {
  Button,
  Input,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Container,
} from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";

function navbar() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Handwriting Recognition
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/DigitRecognizer">
                Digit Recognizer
              </Nav.Link>
              <Nav.Link as={Link} to="/AlphabetRecognizer">
                Alphabet Recognizer
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default navbar;
