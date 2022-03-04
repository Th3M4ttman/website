import logo from '../logo.png';
import biglogo from '../biglogo.png'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default class Home extends Component {
    render() {
  return (
      <div className="bgimg">
      <Navigation/>
      <p className="wtext">  Hi I'm <span className="otext">M</span>att and I'm a: </p>
      </div>
      
      
    );
  }

}

