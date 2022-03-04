import logo from './logo.png';
import biglogo from './biglogo.png'
import './App.css';

import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Contact extends Component {
    render() {
  return (
      <div className="App">
      <div width="80%">
        <header className="App-header">
       
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
          <ul>
          <li>Test</li>
          </ul>
          </nav>
          <p>
            Contact us bruh
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br/>
          <Link className="App-link" to="/">Home</Link>
          <br/>
          <br/>
          <img width="100%" src={biglogo} alt="biglogo"/>
        </header>
      </div>
      </div>
    );
  }

}

