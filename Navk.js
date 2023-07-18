import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navk() {
  return (
    <Navbar expand="lg" className="bg-secondary" variant="dark">
      <Container>
        <Navbar.Brand href="/Home">Employee Register Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Listpage">ListPage</Nav.Link>
            <Nav.Link href="/Contactus">Contactus</Nav.Link>
            <Nav.Link href="/createemp">Add Employee</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navk;
