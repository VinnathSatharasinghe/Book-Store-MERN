import "../css/home.css";
import Nav from "../navbar/Navigation";

import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container>
      <Nav />
      <br></br>
      <br></br>
      <Row className="">
        <Col>
          <h1>WINNY BOOK STORE</h1>
          <h2>Find Your Book With Us</h2>
          <p></p>
          {/* <Button variant="primary" href="/about">

          </Button> */}
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
