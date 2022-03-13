import { Navbar, Nav, Container} from 'react-bootstrap';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import { Outlet } from "react-router-dom";

export default class Navigation extends Component{

  render() {
    return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                <Navbar.Collapse id="collapse">
<Container>
                    <Nav>
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <Nav.Link href="/Programming">Programming</Nav.Link>
                        <Nav.Link href="/Music">Music</Nav.Link>
                        <Nav.Link href="/Art">Art</Nav.Link>
                        <Nav.Link eventKey={2} href="/Contact">Contact</Nav.Link>
                    
                    </Nav>
</Container>
                </Navbar.Collapse>
            </Navbar>
            <div className="App">
            <Outlet />
            </div>
            
            
  
</>
    );
  }
}
