import React, { Component } from 'react'

import CogopLogo from '../../assets/images/cogop-logo.jpg'; 
import { Jumbotron, Row, Col, Container, Image } from 'react-bootstrap';
import './jumbotron.styles.css';

export class JumbotronComponent extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs md="auto">
                        <p>WELCOME TO</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Image src={CogopLogo}  className="cogop-logo" roundedCircle />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <h1>San Fernando Valley</h1>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
      </div>
    )
  }
}

export default JumbotronComponent;
