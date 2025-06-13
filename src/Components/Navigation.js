import { Navbar, Nav, Container} from 'react-bootstrap';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import { Outlet } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="Navbar">
          <Container fluid>
          <Navbar.Brand href="/Home">
            <img
              alt="Logo"
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Matthew Harris
          </Navbar.Brand>

          {/* Hamburger toggle for smaller screens */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="Navbar"/>

          {/* Collapsible area */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link href="/Programming">Programming</Nav.Link>
              <Nav.Link href="/Music">Music</Nav.Link>
              <Nav.Link href="/Art">Art</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
              <Nav.Link href="/Certificates">Certificates</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
          
        </Navbar>
        
        <div className="App">
          <Outlet />
        </div>


      </>
    );
  }
}
