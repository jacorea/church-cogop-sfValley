import React, { Component } from 'react';

import {Navbar, NavbarBrand, Nav, NavDropdown} from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

export class NavbarComponent extends Component {
    render() {
      return (
        <div>
          <Navbar bg='light' expand='lg'>
            <NavbarBrand href="#cogop-sf-valley">
                <span>COGOP</span>
                <span> SF Valley</span>
            </NavbarBrand>
            <NavbarToggle aria-controls="basic-navbar-nav" />
            <NavbarCollapse id="basic-navbar-nav"/>
                <Nav className="mr-auto">
                    <Nav.Link href="#welcome">WELCOME</Nav.Link>
                    <Nav.Link href="#contact">CONTACT</Nav.Link>
                    <Nav.Link href="#location">LOCATION</Nav.Link>
                </Nav>
                <NavDropdown title="WHO WE ARE" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#about-us">ABOUT US</NavDropdown.Item>
                    <NavDropdown.Item href="#our-team">OUR TEAM</NavDropdown.Item>
                </NavDropdown>
          </Navbar>
        </div>
      )
    }
  }
  
  export default NavbarComponent;