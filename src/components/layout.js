import React from "react";
import { Nav, Navbar, Form, FormControl, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Home from "../static/home.svg";
import Saved from "../static/saved.svg";

const layout = (props) => {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg" sticky="top">
        <LinkContainer to="/">
          <Navbar.Brand>Voice to Text</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link>
                <img className="svg_nav" src={Home} alt="Home" />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/saved">
              <Nav.Link>
                <img className="svg_nav" src={Saved} alt="Saved" />
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {props.children}
    </React.Fragment>
  );
};

export default layout;
