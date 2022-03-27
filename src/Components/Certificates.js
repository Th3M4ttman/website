import '../App.css';
import './Certificates.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
//import {BrowserView, MobileView} from 'react-device-detect';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';

const title = (title, sub, un) => {
  if (sub === true){
    if (un === true){
    return(<div className="subtitle">
        <span className="subtitlef">
          {title.substring(0, 1)}
        </span>
        <span className="subtitlerest">
          {title.substring(1, title.length)}
        </span>
        </div>);
  }
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

class certificate{
  constructor(subject, title, level, imgurl){
   this.subject = subject;
   this.title = title;
   this.level = level;
   this.imgurl = imgurl;
  }
}


class Certificate extends Component{
  constructor(props){
    super(props);
    this.state = {
      cert: props.cert,
      isOpen: false,
      collapsed: true
    }
  }
  show(){
    if (!this.state.collapsed){
      const cert = this.state.cert;
      return(
        <>
        <br/>
        <img className="certimg" src={cert.imgurl} alt={cert.title} onClick={() => this.setState({ isOpen: true })} />
        <br/><br/><p className="enlarge"onClick={() => this.setState({ isOpen: true })}>click to enlarge</p>
        </>
      );
    }
  }
  buttonclass(){
    if (this.state.collapsed){
      return "certbuttonf"
    }
    return "certbuttont"
  }
  first(){
    if (this.state.collapsed){
      return "certtitlef"
    }
    return "certtitlefb"
  }
  title(){
    const cert = this.state.cert;
    return(
      <div>
      <span className={this.first()}>{cert.title.substring(0, 1)}</span>
      <span className="certtitlerest">{cert.title.substring(1, cert.title.length)}</span>
      </div>
    );
  }
  render(){
    const { cert, isOpen } = this.state;
    return (
      <>
      <div className="certbox">
      <div className="certtitle">
        <button className={this.buttonclass()} onClick={()=>{this.setState({collapsed: !this.state.collapsed})}}>
          {this.title()}
        </button>
        </div>
        {this.show()}
      </div>
      {isOpen && (
      <Lightbox
        mainSrc={cert.imgurl}
        onCloseRequest={() => this.setState({ isOpen: false })}
      />)}
      </>
    );
  }
}

const certificates = [
  new certificate("Foreign Languages", "Japanese", "GCSE", "/Certificate/Math.jpg"),
  new certificate("Science", "Science", "GCSE", "/Certificate/Science.jpg"),
  new certificate("English", "Adult Literacy", "GCSE", "/Certificate/English.jpg"),
  new certificate("Math", "Math", "GCSE", "/Certificate/Math.jpg"),
  new certificate("IT", "Extended Btec in Videogame and Software Development", "BTEC", "/Certificate/Extended-Btec-IT.jpg"),
  new certificate("IT", "Btec in Videogame and Software Development", "BTEC", "/Certificate/Btec-IT.jpg"),
  new certificate("IT", "Award in Digital Applications", "GCSE", "/Certificate/AIDA.jpg"),
  new certificate("IT", "Functional IT", "GCSE", "/Certificate/Func-English.jpg"),
  new certificate("IT", "C++", "Online Course", "/Certificate/Cpp.jpg"),
  new certificate("IT", "Javascript", "Online Course", "/Certificate/JavaScript.jpg"),
  new certificate("IT", "Machine Learning", "Online Course", "/Certificate/MachineLearning.jpg"),
  new certificate("IT", "PHP", "Online Course", "/Certificate/PHP.jpg"),
  new certificate("IT", "Python", "Online Course", "/Certificate/Python.jpg"),
  new certificate("IT", "Data Structures", "Online Course", "/Certificate/Python-Data-Structures.jpg"),
  new certificate("IT", "Python for Finance", "Online Course", "/Certificate/Python-for-Finance.jpg"),
  new certificate("IT", "R", "Online Course", "/Certificate/r.jpg")
]


const certificate_comps = (subject, level) => {
  return certificates.map((cert) => {
    if (cert.subject === subject && cert.level === level){
      return (<Certificate cert={cert} />);
    }
    return "";
  });
}

class Subject extends Component{
  constructor(props){
    super(props);
    this.state = {
      subject: props.subject,
      open: false
    }
    this._online = certificate_comps(this.state.subject, "Online Course")
    this._gcse = certificate_comps(this.state.subject, "GCSE")
    this._btec = certificate_comps(this.state.subject, "BTEC")
  }
  online(){
    let x = 0;
    for (let cert of certificates){
      if (cert.subject === this.state.subject && cert.level === "Online Course"){
        x += 1;
      }
    }
    if (x > 0){
      return(
        <>
        {title("Online Courses", true, false)}<br/>
        {this._online}
        </>
      );}
    return ""
  }
  gcse(){
    let x = 0;
    for (let cert of certificates){
      if (cert.subject === this.state.subject && cert.level === "GCSE"){
        x += 1;
      }
    }
    if (x > 0){
      return(
        <>
        {title("Level 2 (GCSE)", true, false)}<br/>
        {this._gcse}
        </>
      );}
    return ""
  }
  btec(){
    let x = 0;
    for (let cert of certificates){
      if (cert.subject === this.state.subject && cert.level === "BTEC"){
        x += 1;
      }
    }
    if (x > 0){
      return(
        <>
        {title("Level 3 (NVQ)", true, false)}<br/>
        {this._btec}
        </>
      );}
    return ""
  }
  show(){
    if (this.state.open) {
      return (
        <>
        <br/><br/>
        {this.btec()}
        {this.gcse()}
        {this.online()}
        
        </>
      );
    } else {
      return ""
    }
  }
  buttonclass(){
    if (this.state.open === true){
      return "certbuttont"
    }
    return "certbuttonf"
  }
  render(){
    return (
      <>
      <button className={this.buttonclass()} onClick={(e) => {this.setState({open: !this.state.open})}}>{this.state.subject}</button>
      {this.show()}
      <br/><br/>
      </>
    );
  }
}

export default class Certificates extends Component{
  render(){
    return(
      <div className="App-header">
      <div className="certsbox">
        {title("Certificates")}
        {title("", true, true)}
        <br/>
        <div className="innercerts">
          <p className="enlarge">click subjects to expand</p>
          <Subject subject="IT" />
          <Subject subject="Math" />
          <Subject subject="English" />
          <Subject subject="Science" />
          <Subject subject="Foreign Languages" />
          <Subject subject="Misc" />
        </div>
      </div>
      </div>
    );
  }
}
