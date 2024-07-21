import "../css/home.css"

import { Container, Row, Col, Button } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>Welcome to the Book Store</h1>
          <p>
            Your one-stop shop for all your book needs. Browse our collection
            and find your next great read.
          </p>
          <Button variant="primary" href="/about">
            Learn More
          </Button>
        </Col>
      </Row>

      <Row>
        <div className="banner">
          <div className="slider" style={{ "--quantity": 10 }}>

            <div className="item" style={{ "--position": 1 }}>
              <img src="/image/1.jpg" alt="1" />
            </div>
            <div className="item" style={{ "--position": 2 }}>
              <img src="/image/3.jpg" alt="1" />
            </div>
            <div className="item" style={{ "--position": 3 }}>
              <img src="/image/4.jpg" alt="1" />
            </div>
            <div className="item" style={{ "--position": 4 }}>
              <img src="/image/5.jpg" alt="1" />
            </div>
            <div className="item" style={{ "--position": 5 }}>
              <img src="/image/6.jpg" alt="1" />
            </div>
            <div className="item" style={{ "--position": 6 }}>
              <img src="/image/7.jpg" alt="1" />
            </div>
            <div className="item" style={{ "--position": 7 }}>
              <img src="/image/8.jpg" alt="1" />
            </div>
            <div className="item" style={{ "--position": 8 }}>
              <img src="/image/9.jpg" alt="1" />
            </div>
            <div className="item" style={{ "--position": 9 }}>
              <img src="/image/10.jpg" alt="1" />
            </div>
            <div className="item" style={{ "--position": 10 }}>
              <img src="/image/11.jpg" alt="1" />
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default HomePage;
