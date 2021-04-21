import React from "react";
import { Figure, Container, Row, Col } from 'react-bootstrap';
import JZ from "./JZ.png"

const About = () => (
  <Container>
    <Row>
      <Col>
        <Figure>
          <Figure.Image
            width={900}
            height={900}
            alt="171x180"
            src={JZ}
          />
          <Figure.Caption>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
</Figure.Caption>
        </Figure>
      </Col>
      <Col>2 of 2</Col>
    </Row>
  </Container>
);

export default About;
