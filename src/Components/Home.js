
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {BrowserView, MobileView} from 'react-device-detect';
import { DemoSearch } from "../Demos";

const title = (title, sub, un) => {
  if (sub === true){
    return(<div className="subtitlenu">
        <span className="subtitlef">
          {title.substring(0, 1)}
        </span>
        <span className="subtitlerest">
          {title.substring(1, title.length)}
        </span>
        </div>);
  }
  if (un === true){
    return(<div className="title">
        <span className="titlef">
          {title.substring(0, 1)}
        </span>
        <span className="titlerest">
          {title.substring(1, title.length)}
        </span>
        </div>);
  }
  return(<div className="titlenu">
        <span className="titlef">
          {title.substring(0, 1)}
        </span>
        <span className="titlerest">
          {title.substring(1, title.length)}
        </span>
        </div>);
}

class Web extends Component{
  render(){
    return(
      <div>
      {title("Web")}
      <p>I am a competent web developer with years of experience working with both front end and back end systems.</p>
      <br/>
      <p>I am comfortable with both Javascript, Python and some of the many frameworks therein.</p>
      <br/>
      {title("Technologies", true)}
      <p>Frameworks, languages and technologies i'm comfortable with go here</p>
      <br/><br/><br/>
      {title("", false, true)}
      <br/><br/><br/>
      </div>
    );
  }
}

class Software extends Component{
  render(){
    return(
      <div>
      {title("Software")}
      <p>preamble</p>
      <br/>
      <p>experirence</p>
      <br/>
      {title("Technologies", true)}
      <p>Frameworks, languages and technologies i'm comfortable with go here</p>
      <br/><br/><br/>
      {title("", false, true)}
      <br/><br/><br/>
      </div>
    );
  }
}

class Games extends Component{
  render(){
    return(
      <div>
      {title("Games")}
      <p>preamble</p>
      <br/>
      <p>experirence</p>
      <br/>
      {title("Technologies", true)}
      <p>Frameworks, languages and technologies i'm comfortable with go here</p>
      <br/><br/><br/>
      {title("", false, true)}
      <br/><br/><br/>
      </div>
    );
  }
}

class Art extends Component{
  render(){
    return(
      <div>
      {title("Art")}
      <p>preamble</p>
      <br/>
      <p>experirence</p>
      <br/>
      {title("Gallery", true)}
      <p>3D Gallery goes here</p>
      <br/><br/><br/>
      {title("", false, true)}
      <br/><br/><br/>
      </div>
    );
  }
}

class Music extends Component{
  render(){
    return(
      <div>
      {title("Music")}
      <p>preamble</p>
      <br/>
      {title("Instruments", true)}
      <p>Instruments i'm comfortable with go here</p>
      <br/><br/><br/>
      {title("", false, true)}
      <br/><br/><br/>
      </div>
    );
  }
}

class Person extends Component{
  render(){
    return(
      <div>
      {title("Person")}
      <p>preamble about me</p>
      <br/>
      <p>education</p>
      <br/>
      {title("Interests/Hobbies", true)}
      <p>interests/hobbies go here</p>
      <br/><br/><br/>
      {title("", false, true)}
      <br/><br/><br/>
      </div>
    );
  }
}

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
    let sectioncontent = ["", <Web />, <Software />, <Games />, <Music />, <Art />, <Person />]
    let c = sectioncontent[this.state.chosen]
    if (this.state.chosen === 0){return <p></p>}
    return(
      <div className="demosearch">
      <br />
      {c}
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


