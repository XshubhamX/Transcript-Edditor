import React from "react";
import { Navbar, Form, FormControl, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const layout = (props) => {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg" sticky="top">
        <LinkContainer to="/">
          <Navbar.Brand>Voice to Text</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavDropdown
            className="ml-auto"
            title="Select Category"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Saved Notes</NavDropdown.Item>
          </NavDropdown>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-1" />
          </Form>
        </Navbar.Collapse>
      </Navbar>

      {props.children}
    </React.Fragment>
  );
};

export default layout;
