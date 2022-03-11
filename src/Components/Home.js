
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {BrowserView, MobileView} from 'react-device-detect';


class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      p: props.p
    }
  }
  render(){
    let chosen = this.state.p.state.chosen;
    let parent = this.state.p;
    let sections = ["", "Web", "Software", "Video Games", "Music", "Art", "Person"]
    if (chosen === 0){return <p></p>}
    return(
      <p>{sections[chosen]} Content Goes Here</p>
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
        return "Web Developer"
        
      } else if (this.state.p.state.chosen === 2){
        return "Software Developer"
      } else if (this.state.p.state.chosen === 3){
        return "Video Game Developer"
      } else if (this.state.p.state.chosen === 4){
        return "Musician"
      } else if (this.state.p.state.chosen === 5){
        return "Artist"
      } else if (this.state.p.state.chosen === 6){
        return "Person"
      } else {
        return "Please Select"
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
        
          <button className="imabutton" onClick={this.left} >&lt;</button><span className="imaselected">{this.chosen()}</span><button className="imabutton" onClick={this.right}>&gt;</button>
        
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
          <br/>
          Mobile
          <Content p={this}/>
          <br/><br/><br/><br/><br/><br/>
        </div>
      </div>
      </MobileView>
      </>);
      
  }
}


