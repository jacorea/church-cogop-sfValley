import React, { Component } from 'react'
import { Jumbotron, Row, Col, Container } from 'react-bootstrap';

export class JumbotronComponent extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        <p>WELCOME TO</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <h1>COGOP SF Valley</h1>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
      </div>
    )
  }
}

export default JumbotronComponent;
