
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navscss.css';

const Navigation = () => {
  return (
    <Navbar bg="light" >
      <Navbar.Brand>
        <img
          src="../../public/logos/wadadadawdawdadd.png"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Navbar.Collapse>
        <Nav className="pagers">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
