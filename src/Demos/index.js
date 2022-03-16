import '../App.css';
import "./demos.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
//import {BrowserView, MobileView} from 'react-device-detect';


class Demo{
  constructor(title, description, url, languages=[], tags=[], frameworks=[], imgurl="", source_url=null, priority=0){
    this.title = title;
    this.description = "  " + description;
    this._languages = languages;
    this._tags = tags;
    this.priority = priority;
    this._frameworks = frameworks;
    this.imgurl = imgurl;
    this.source_url = source_url;
    this.url = url;
  }
  buttons(){
    if (this.source_url === null){
      return(
      <span>
        <a href={this.url}><button className="onlyrun">Run <img className="buttonicon" src="run.svg" alt=""/></button></a>
      </span>
      );
    } else {
      return(
      <span>
      <a href={this.url}><button className="run">Run <img className="buttonicon" src="run.svg" alt=""/></button></a>
      <a href={this.source_url}><button className="source">Source <img className="sourceicon" src="github.svg" alt=""/></button></a><br/><br/>
      </span>
      );
    }
    }
  languages(){
    let x = this._languages.map(lang => {return(<LANGUAGE_TAG language={lang}/>)});
    return x;
  }
  frameworks(){
    let x = this._frameworks.map(tag => {return(<TAG tag={tag} key={tag}/>)});
    return x;
  }
  tags(){
    let x = this._tags.map(tag => {return(<TAG tag={tag} key={tag}/>)});
    return x;
  }
  split_title(){
    return(<div className="title">
      <span className="titlef">
        {this.title.substring(0, 1)}
      </span>
      <span className="titlerest">
        {this.title.substring(1, this.title.length)}
      </span>
      </div>);
  }
}

class LANGUAGE_TAG extends Component{
  constructor(props){
    super(props);
    console.log(this);
  }
  render(){
    var lang = this.props.language;
    
    return(<button className={lang}><div className="logo">{lang}<img className="langlogo" src={lang+".svg"} alt=""/></div></button>);
  }
}

class TAG extends Component{
  constructor(props){
    super(props);
    console.log(this);
  }
  render(){
    var tag = this.props.tag;
    if (this.props.icon != null){
      var tagicon = this.props.icon;
      return(
      <button className="tag">
       {tag}<img className="tagicon" src={tagicon} alt=""/>
      </button>);
    } else {
      return(
      <button className="tag">{tag}</button>);
    }
  }
}

export class DemoCard extends Component {
  constructor(props){
    super(props);
    this.demo = new Demo("SRG", "Attempts to consolidate Sexual, Relationship and Gender attributes to a 1 byte value and displays it as a pretty shield or badge.", "http://Srgindex.herokuapp.com", ["Javascript", "Python"], ["Web"], ["Flask", "Node", "React"], "/srgdemo.png", "https://github.com/Th3M4ttman/SRGServer")
  }
  render(){
    return(
      <div className="App-header">
      <div className="democard">
        {this.demo.split_title()}
        <p className="desc">Description:<br/>{this.demo.description}</p>
        <img className="demoimg" src={this.demo.imgurl} alt="Demo" />
        <br/><br/>
        {this.demo.buttons()}
        <div className="tags">
        Languages: {this.demo.languages()}<br/>
        Frameworks: {this.demo.frameworks()}<br/>
        Tags: {this.demo.tags()}
        </div>
      </div>
      </div>
    );
  }
}
