import React from "react";
import { Container, Nav, Stack } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const Appbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link
          className="text-decoration-none fs-4 fw-bold text-white"
          to="/home"
        >
          Zommato
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Stack direction="horizontal" gap={3}>
              <Link className="text-decoration-none me-4 text-white" to="/home">
                Home
              </Link>
              <Link
                className="text-decoration-none me-4 text-white"
                to="/meals"
              >
                Meals
              </Link>
            </Stack>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Appbar;
