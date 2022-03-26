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
      isOpen: false
    }
  }
  render(){
    const { cert, isOpen } = this.state
    return (
      <>
      <div className="certbox">
      <div className="certtitle">
        {title(cert.title, true, true)}
        </div>
        <br/>
        <img className="certimg" src={cert.imgurl} alt={cert.title} onClick={() => this.setState({ isOpen: true })} />
        <br/><br/><p className="enlarge">click to enlarge</p>
      </div>
      <br/>
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
  new certificate("IT", "C++", "Online Course", "/Certificate/C++.jpg"),
  new certificate("IT", "Javascript", "Online Course", "/Certificate/JavaScript.jpg"),
  new certificate("IT", "Machine Learning", "Online Course", "/Certificate/MachineLearning.jpg"),
  new certificate("IT", "PHP", "Online Course", "/Certificate/PHP.jpg"),
  new certificate("IT", "Python", "Online Course", "/Certificate/Python.jpg"),
  new certificate("IT", "Data Structures", "Online Course", "/Certificate/Python-Data-Structures.jpg"),
  new certificate("IT", "Python for Finance", "Online Course", "/Certificate/Python-for-Finance.jpg"),
  new certificate("IT", "R", "Online Course", "/Certificate/r.jpg")
]


const certificate_comps = certificates.map(
  (cert) => {
    return (<Certificate cert={cert} />);
  });

export default class Certificates extends Component{
  render(){
    return(
      <div className="App-header">
      <div className="certsbox">
        {title("Certificates")}
        {title("", true, true)}
        <br/>
        <div className="innercerts">
        {certificate_comps}
        </div>
      </div>
      </div>
    );
  }
}
