import { Navbar, Nav } from 'react-bootstrap';
import React, { Component } from 'react';

export default class Navigation extends Component{

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="Home">
        <img
          alt=""
          src="/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Matthew Harris
      </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#deets">More details</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Good stuff
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
  }
}
