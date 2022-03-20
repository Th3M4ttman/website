
import '../App.css';
import "./Cheatsheets.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';



const _sheets = [
  "Test|http://google.com",
  "Test|http://google.com",
  "Test|http://google.com"
];

const sheets = _sheets.map((st) => {
  var data = st.split("|");
  var text = data[0];
  var url = data[1];
  return(<><br/><a className="cheat" href={url} key={text}>{text}</a><br/></>);
})

export default class Cheatsheets extends Component{
  render(){
    return(
      <div className="App-header">
        {sheets}
      </div>
    );
  }
}