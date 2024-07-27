
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navscss.css';

const Navigation = () => {
  return (
    <Navbar bg="light" >
      <Navbar.Brand>
        <img
          src="../../public/logos/wadadadawdawdadd-removebg-preview.png"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Navbar.Collapse>
        <Nav className="pagers">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/hh">About</Nav.Link>
          <Nav.Link as={Link} to="/signup">Singup</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
