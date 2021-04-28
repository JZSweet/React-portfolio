import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import HW1 from "./img/HW1.png";
import HW2 from "./img/HW2.png";
import HW3 from "./img/HW3.png";
import GW1 from "./img/GW1.png";
import GW2 from "./img/GW2.png";


class Project extends Component {
  render() {
    return (

      <Container>
        <Row>
          <Col>
          <Card style={{ width: '21rem' }}>
            <Card.Img variant="top" src={HW1} />
            <Card.Body>
              <Card.Title>React Employee Directory</Card.Title>
              <Card.Text>
                 Directory to all the non-sensitive employees information. Build with MERN. Host on Heroku.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://github.com/JZSweet/employee-directory">Checkout Repo</Card.Link>
              <Card.Link href="https://employee-directory-jz.herokuapp.com/">Checkout Site</Card.Link>
            </Card.Body>
          </Card>
          </Col>

          <Col>
          <Card style={{ width: '21rem' }}>
            <Card.Img variant="top" src={HW2} />
            <Card.Body>
              <Card.Title>Count Down Quiz</Card.Title>
              <Card.Text>
               Timed quiz on JavaScript fundamentals. My first project, not my best work but its especial to me.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://github.com/JZSweet/countdown-quiz">Checkout Repo</Card.Link>
              <Card.Link href="https://jzsweet.github.io/countdown-quiz/">Checkout Site</Card.Link>
            </Card.Body>
          </Card>
          </Col>

          <Col>
          <Card style={{ width: '21rem' }}>
            <Card.Img variant="top" src={HW3} />
            <Card.Body>
              <Card.Title>Fitness Tracker</Card.Title>
              <Card.Text>
               A workout tracker i build (back end), connects to the MongoDB database. Host on Heroku.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://github.com/JZSweet/Fitness-Tracker">Checkout Repo</Card.Link>
              <Card.Link href="https://fitness-tracker-jz.herokuapp.com/?id=60628aaa5a725f00154fd6db">Checkout Site</Card.Link>
            </Card.Body>
          </Card>
          </Col>
        </Row>

        <Row>
          <Col>
          <Card style={{ width: '21rem' }}>
            <Card.Img variant="top" src={GW1} />
            <Card.Body>
              <Card.Title>Entertainment Guide</Card.Title>
              <Card.Text>
               An app to provide movies and TV shows information to users. My first group project.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://github.com/JZSweet/entertainment-guide">Checkout Repo</Card.Link>
              <Card.Link href="https://kytaylor.github.io/project-1/">Checkout Site</Card.Link>
            </Card.Body>
          </Card>
          </Col>

          <Col>
          <Card style={{ width: '21rem' }}>
            <Card.Img variant="top" src={GW2} />
            <Card.Body>
              <Card.Title>Grocery list</Card.Title>
              <Card.Text>
               An app to keep track of your grocery. My second group project.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="https://github.com/JZSweet/Grocery-list">Checkout Repo</Card.Link>
              <Card.Link href="https://the-grocery-list.herokuapp.com/">Checkout Site</Card.Link>
            </Card.Body>
          </Card>
          </Col>

          <Col>
          <Card style={{ width: '21rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">Checkout Repo</Card.Link>
              <Card.Link href="#">Checkout Site</Card.Link>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>

    );
  };
};


export default Project;
