import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{ height: "100px" }}
      className="d-flex shadow p-3 mb-5 fixed-top"
    >
      <Container>
        <Navbar.Brand href="#">Atharva Badhan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-felx justify-content-end"
        >
          <Nav
            className="ml-auto d-flex justify-content-evenly"
            style={{ width: "61%" }}
          >
            <NavLink className="nav-link active text-secondary-emphasis" to="/home">Home</NavLink>
            <NavLink className="nav-link active text-secondary-emphasis" to="/about">About</NavLink>
            <NavLink className="nav-link active text-secondary-emphasis" to="/contact">Contact Me</NavLink>
            <NavLink className="nav-link active text-secondary-emphasis" to="/projects">Projects</NavLink>
            <NavLink className="nav-link active text-secondary-emphasis" to="/vision">Vision</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
