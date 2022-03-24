
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {BrowserView, MobileView} from 'react-device-detect';
import { DemoSearch } from "../Demos";


export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      chosen: 0
    }
    this.left = this.left.bind(this);
    this.right = this.right.bind(this);
    this.chosen = this.chosen.bind(this);

  }
  
  chosen(){
      console.log(this.state.chosen)
      if (this.state.chosen === 1){
        return (<span className="webdev">Web Developer</span>);
      } else if (this.state.chosen === 2){
        return (<span className="softdev">Software Developer</span>);
      } else if (this.state.chosen === 3){
        return (<span className="gamedev">Video Game Developer</span>);
      } else if (this.state.chosen === 4){
        return (<span className="music">Musician</span>);
      } else if (this.state.chosen === 5){
        return (<span className="art">Artist</span>);
      } else if (this.state.chosen === 6){
        return (<span className="person">Person</span>);
      } else {
        return (<span className="selected">Please Select</span>);
      }
      
    }
  imaselect() {
  return (
      <>
      <br/>
      <div className="imaselect">
        
          <button className="imabutton" onClick={this.left} >&lt;</button>{this.chosen()}<button className="imabutton" onClick={this.right}>&gt;</button>
        
      </div>
      </>
    );
  }
  right(){
    if (this.state.chosen > 5){
      this.setState({chosen: 0})
    } else {
      this.setState({chosen: this.state.chosen + 1})
    }
  }
  left(){
    if (this.state.chosen < 1){
      this.setState({chosen: 5})
    } else {
      this.setState({chosen: this.state.chosen - 1})
    }
  }
  ima(){
  return (
      <>
      <div className="wtext"> Hi I'm 
        <span className="otext"> M
        </span>
         att and I'm a:
      
      {this.imaselect()}
      </div>
      
      </>
    );
  }
  content(){
    let sections = ["", "Web", "Software", "Games", "Music", "Art", "Person"]
    let section = sections[this.state.chosen];
    if (this.state.chosen === 0){return <p></p>}
    return(
      <div className="demosearch">
      <br />
      <h1>{section}</h1>
      blahblahblah {section} content goes here
      <DemoSearch section={section} key={section} />
      </div>);
  }
  down(){
    if (this.state.chosen !== 0){
      return(<button className="downbutton" onClick={(e)=>{
        document.querySelector("body").scrollTo(0,500)
        
      }}><p className="downtext">v</p></button>);
    } else {
      return null
    }
  }
  render(){
  return (
    <>
      <BrowserView>
      <div className="App-header">
        
        <div className="bgimg">
        <div className="holder">
          {this.ima()}
          {this.down()}
        </div>
        </div>
        <div className="App-header">
          <br/>
          Desktop
          {this.content()}
          <br/><br/><br/><br/><br/><br/>
        </div>
      </div>
      </BrowserView>
      <MobileView>

      <div className="App-header">
        {this.down()}
        <div className="mbgimg">
          {this.ima()}
        </div>
        <div className="App-header">
          {this.content()}
        </div>
      </div>
      </MobileView>
      </>);
      
  }
}


