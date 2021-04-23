import React, { Component } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import sky1 from "./1.jpg";
import sky2 from "./2.jpg";
import sky3 from "./3.JPG";

class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>Some of my works and life outside of coding.</Col>
          <Col>Photograph credit:JZ</Col>
        </Row>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={sky1}
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={sky2}
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={sky3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  };
};

export default Blog;
