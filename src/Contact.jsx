
import './App.css';

import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
  return (
      
      <div className="App-header">
      <br/><br/><br/>
      <form action="https://public.herotofu.com/v1/59fb9260-a169-11ec-bdf8-dd9c99f898ec" method="post">
  
    <label for="name">Your Name</label>
    <br/>
    <input name="Name" id="name" type="text" required />
  
    <br/>
    <label for="email">Your Email</label>
    <br/>
    <input name="Email" id="email" type="email" required  />
    <br/>
    <label for="message">Message</label>
    <br/>
    <textarea name="Message" id="message" type="text" required rows="10" />
    <br/>
    <input type="submit" value="Send" />
</form>
          
      </div>
    );
  }

}

export class Thanks extends Component {
    render() {
  return (
      
      <div className="App-header">
      <br/><br/><br/>
      <div className="mbgimg">
      <div className="thankstext">Thank you for getting in contact.
      I will try to respond promptly.
      <br/>
      <a className="App-link" href="/home">Home</a>
      </div>
      </div>
      </div>
    );
  }

}

