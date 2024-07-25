import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';

const Login = () => {

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="login-box">
        <Col>
          <h2 className="text-center mb-4 text-light">Login</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label className="text-light">Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label className="text-light">Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" required />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>

    );

};

export default Login;