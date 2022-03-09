import { Navbar, Nav } from 'react-bootstrap';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <Nav.Link href="/Programming">Programming</Nav.Link>
                        <Nav.Link href="/Music">Music</Nav.Link>
                        <Nav.Link href="/Art">Art</Nav.Link>
                        <Nav.Link eventKey={2} href="/Contact">Contact</Nav.Link>
                    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
  }
}
