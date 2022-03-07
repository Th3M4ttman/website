import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from"./reportWebVitals";
import Contact from "./Contact.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from "./Components/Navigation";
import Privacy from "./Components/privacy"

import { Route, Routes } from 'react-router-dom';

import { BrowserRouter as Router} from 'react-router-dom';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <>
  <div className="App">
  <Navigation/>
  <Router>
  <Routes>
    <Route path="/" element={<App />} />
      <Route path="Contact-Us" element={<Contact/>} />
      <Route path="Contact" element={<Contact/>} />
      <Route path="Privacy" element={<Privacy/>} />
      <Route path="Home" element={<App />} />
      <Route path="*" element={<App />} />
  </Routes>
  </Router>
  </div>
  <div className="foot">
  <br/>
  Copyright © 2022 Matthew Harris - All Rights Reserved.
  <br/>
  <a className="priv" href="/privacy">
    Privacy Policy
  </a>
  <br/>
  </div>
  </>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
