import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from"./reportWebVitals";
import Contact, {Thanks} from "./Contact.jsx";
import Notfound from "./Notfound";

import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from "./Components/Navigation";
import Cheatsheets from "./Components/Cheatsheets"
import Privacy from "./Components/privacy"
import Particletest from "./Components/particletest"
import { Route, Routes } from 'react-router-dom';

import { BrowserRouter as Router} from 'react-router-dom';

import { DemoRouter, MicroDemoPage, DemoSearch } from "./Demos";

const rootElement = document.getElementById("root");

if (window.location.host.split('.')[0] === 'demo'){
    ReactDOM.render(
    <>
    <DemoRouter />
    </>,
      rootElement
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
} else if (window.location.host.split('.')[0] === 'cheat'){
  ReactDOM.render(
    <>
    <Router>
    <Routes>
     
      <Route path="/" element={<Navigation/>}>
        <Route path="*" element={<Cheatsheets />} />
      </Route>
    </Routes>
    </Router>
    
    <div className="foot">
    <br/><br/><br/>
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
} else {
  ReactDOM.render(
    <div className="bounds">
    <Router>
    <Routes>
     
      <Route path="/" element={<Navigation/>}>
        <Route exact path="/" element={<App />} />
        <Route path="Contact-Us" element={<Contact/>} />
        <Route path="Contact" element={<Contact/>} />
        <Route path="Demo">
          <Route path="" element={<DemoSearch />} />
          <Route path="*" element={<MicroDemoPage />} />
          </Route>
        <Route path="Privacy" element={<Privacy/>} />
        <Route path="Thanks" element={<Thanks/>} />
        <Route path="Cheat" element={<Cheatsheets/>} />
        <Route path="particles" element={<Particletest />} />
        <Route path="Home" element={<App />} />
        <Route path="*" element={<Notfound />} />
    </Route>
    </Routes>
    </Router>
    <div className="foot">
    <br/><br/><br/>
    Copyright © 2022 Matthew Harris - All Rights Reserved.
    <br/>
    <a className="priv" href="/privacy">
      Privacy Policy
    </a>
    <br/>
    </div>
    </div>,
      rootElement
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}
