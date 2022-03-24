
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {BrowserView, MobileView} from 'react-device-detect';
import { DemoSearch } from "../Demos";

class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      p: props.p
    }
  }
  render(){
    let chosen = this.state.p.state.chosen;
    let sections = ["", "Web", "Software", "Video Games", "Music", "Art", "Person"]
    let section = sections[chosen];
    if (chosen === 0){return <p></p>}
    return(
      <div className="demosearch">
      <br />
      <h1>{section}</h1>
      blahblahblah {section} content goes here
      <DemoSearch tags={[section]}/>
      </div>
      
    );
  }
}

export class ImaSelect extends Component {
    constructor(props)
    {
      super(props);
      this.state = {
        p: props.p
      };
      this.left = this.left.bind(this);
      this.right = this.right.bind(this);
      this.chosen = this.chosen.bind(this);
    }
    chosen(){
      console.log(this.state.p)
      if (this.state.p.state.chosen === 1){
        return (<span className="webdev">Web Developer</span>);
      } else if (this.state.p.state.chosen === 2){
        return (<span className="softdev">Software Developer</span>);
      } else if (this.state.p.state.chosen === 3){
        return (<span className="gamedev">Video Game Developer</span>);
      } else if (this.state.p.state.chosen === 4){
        return (<span className="music">Musician</span>);
      } else if (this.state.p.state.chosen === 5){
        return (<span className="art">Artist</span>);
      } else if (this.state.p.state.chosen === 6){
        return (<span className="person">Person</span>);
      } else {
        return (<span className="selected">Please Select</span>);
      }
      
    }
    right(){
    document.documentElement.scrollTop = document.body.scrollTop = 150;
      if (this.state.p.state.chosen >= 6){
        this.state.p.setState({chosen:1})
      } else {
        this.state.p.setState({chosen:this.state.p.state.chosen + 1})
      }
    }
    left(){
    document.documentElement.scrollTop = document.body.scrollTop = 150;
      if (this.state.p.state.chosen <= 0){
        this.state.p.setState({chosen:1})
      } else {
        this.state.p.setState({chosen:this.state.p.state.chosen - 1})
      }
    }
    render() {
  return (
      <>
      <br/>
      <div className="imaselect">
        
          <button className="imabutton" onClick={this.left} >&lt;</button>{this.chosen()}<button className="imabutton" onClick={this.right}>&gt;</button>
        
      </div>
      </>
    );
  }
}


export class Ima extends Component {
  constructor(props){
    super(props);
    this.state = {
      p: props.p
    }
  }
    render() {
  return (
      <>
      <div className="wtext"> Hi I'm 
        <span className="otext"> M
        </span>
         att and I'm a:
      
      <ImaSelect p={this.state.p}/>
      </div>
      
      </>
    );
  }
}


export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      chosen: 0
    }
  }
  render(){
  return (
    <>
      <BrowserView>
      <div className="App-header">
        
        <div className="bgimg">
        <div className="holder">
          <Ima p={this}/>
        </div>
        </div>
        <div className="App-header">
          <br/>
          Desktop
          <Content p={this}/>
          <br/><br/><br/><br/><br/><br/>
        </div>
      </div>
      </BrowserView>
      <MobileView>

      <div className="App-header">
        
        <div className="mbgimg">
        
          <Ima p={this}/>
        </div>
        <div className="App-header">
          <Content p={this}/>
        </div>
      </div>
      </MobileView>
      </>);
      
  }
}


