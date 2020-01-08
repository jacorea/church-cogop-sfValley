import React, { Component } from 'react';

import {Navbar, NavbarBrand, Nav, NavDropdown, Image } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

import cogopLogo from '../../assets/images/cogop-logo.jpg'

export class NavbarComponent extends Component {
    render() {
      return (
        <div>
          <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
            <NavbarBrand href="#cogop-sf-valley">
                <Image 
                  src={cogopLogo}
                  width="20"
                  height="20"
                  className="d-inline-block align-top"
                  roundedCircle  
                /> San Fernando Valley
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