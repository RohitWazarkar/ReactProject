import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppNavbar() {
  return (
    <Navbar bg="success" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/list">List Page</Nav.Link>
        </Nav>

        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/showbycard">Show By Card</Nav.Link>
        </Nav>

        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/about">About Us</Nav.Link>
        </Nav>

        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Contact Us</Nav.Link>
        </Nav>

        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/loginpage">Login page</Nav.Link>
        </Nav>

        <Nav className="mr-auto">
          <Nav.Link as={Link} to="emp/:id">Employee </Nav.Link>
        </Nav>

        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/empcreate">Add Employee</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
/*<Route path="emp/:id" element={<Employee />} />*/

export default AppNavbar;
