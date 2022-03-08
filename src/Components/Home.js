
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

export class ImaSelect extends Component {
    constructor(props)
    {
      super(props);
      this.state = {
        chosen: 0
      };
      this.left = this.left.bind(this);
      this.right = this.right.bind(this);
      this.chosen = this.chosen.bind(this);
    }
    chosen(){
      if (this.state.chosen === 1){
        return "Web Developer"
        
      } else if (this.state.chosen === 2){
        return "Software Developer"
      } else if (this.state.chosen === 3){
        return "Video Game Developer"
      } else if (this.state.chosen === 4){
        return "Musician"
      } else if (this.state.chosen === 5){
        return "Artist"
      } else if (this.state.chosen === 6){
        return "Person"
      } else {
        return "Please Select"
      }
      
    }
    right(){
      if (this.state.chosen >= 6){
        this.setState({chosen:0})
      } else {
        this.setState({chosen:this.state.chosen + 1})
      }
    }
    left(){
      if (this.state.chosen <= 0){
        this.setState({chosen:1})
      } else {
        this.setState({chosen:this.state.chosen - 1})
      }
    }
    render() {
  return (
      <>
      <br/>
      <div className="imaselected">
          <button className="imabutton" onClick={this.left} >&lt;</button><span className="imaselected">{this.chosen()}</span><button className="imabutton" onClick={this.right}>&gt;</button>
        </div>
      </>
    );
  }
}


export class Ima extends Component {
    render() {
  return (
      <>
      <div className="wtext"> Hi I'm 
        <span className="otext"> M
        </span>
         att and I'm a:
      
      <ImaSelect/>
      </div>
      
      </>
    );
  }
}


export default class Home extends Component {
    render() {
  return (
    <>
      <div className="App-header">
        
        <div className="bgimg">
        
          <Ima />
        </div>
        <div className="App-header">
          <br/>
          Yo
          <br/><br/><br/><br/><br/><br/>
        </div>
      </div>
      
      </>
    );
  }

}

