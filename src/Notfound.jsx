
import './App.css';

import React, { Component } from 'react';

export default class Notfound extends Component {
    render() {
  return (
      <div className="App-header">
      <div className="mbgimg">
      
      <br/>
      <div className="lost">Oops looks like you're lost...</div>
       <br/><br/>
      <img src="/notfound.gif" alt="Not Found" width="100%" />
      <br/><br/>
      <a className="lostlink" href="https://matthewharris.tech"> Home </a>
      </div>
      </div>
    );
  }

}

