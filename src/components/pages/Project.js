import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Groupwork1 from "./Groupwork.png"
import Groupwork2 from "./secondGW.png"

class Project extends Component {
  render() {
    return (

      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>

    );
  };
};


export default Project;
