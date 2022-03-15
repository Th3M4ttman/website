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
      <span><button className="onlyrun">Run</button></span>
      );
    } else {
      return(
      <span>
      <a href={this.url}><button className="run">Run</button></a>
      <a href={this.source_url}><button className="source">Source</button></a><br/><br/>
      </span>
      );
    }
    }
  languages(){
    let x = this._languages.map(lang => {return(<LANGUAGE_TAG language={lang}/>)});
    console.log(x)
    return x;
  }
  frameworks(){
    var out = "Frameworks: ";
    if (this._frameworks.length === 0){
      return out
    }
    for (var fram of this._frameworks){
      out += fram + ", "
    }
    return out.substring(0, out.length - 2)
  }
  tags(){
    var out = "Tags: ";
    for (var tag of this._tags){
      out += tag + ", "
    }
    return out.substring(0, out.length - 2)
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
    
    return(<button className={lang}><div className="logo">{lang}<img className="langlogo" src={lang+".svg"} alt={lang}/></div></button>);
  }
}

export class DemoCard extends Component {
  constructor(props){
    super(props);
    this.demo = new Demo("Test Project", "Project Description blahblahblah", "https://demo.matthewharris.tech/TestProject", ["Javascript", "Python"], ["Web"], [], "/demo.png", "https://github.com")
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
        {this.demo.frameworks()}<br/>
        {this.demo.tags()}</div>
      </div>
      </div>
    );
  }
}
