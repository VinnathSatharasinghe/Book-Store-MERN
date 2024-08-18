
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./navscss.css";

const Navigation = () => {
  return (
    <Navbar bg="light" >
      <Navbar.Brand>
        <img
          src="/efef.png"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>

      <Navbar.Collapse>
        <Nav className="pagers">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/signup">Singup</Nav.Link>

          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/asignup">A-Signup</Nav.Link>
          <Nav.Link as={Link} to="/alogin">A-Login</Nav.Link>
          <Nav.Link as={Link} to="/tl">test-Login</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
