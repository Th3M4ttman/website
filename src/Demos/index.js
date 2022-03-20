import '../App.css';
import "./demos.css";
import Navigation from "../Components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
//import {BrowserView, MobileView} from 'react-device-detect';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { InputButtonOutput } from "./Projects"

export class Demo{
  constructor(title, description, url, languages=[], tags=[], frameworks=[], imgurl="", source_url=null, project_type="Full", priority=0){
    this.title = title;
    this.description = "  " + description;
    this._languages = languages;
    this._tags = tags;
    this.priority = priority;
    this._frameworks = frameworks;
    this.imgurl = imgurl;
    this.source_url = source_url;
    this.url = url;
    this.project_type = project_type;
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
  split_title(active){
    if (active){
      return(<div className="title">
        <span className="titlef">
          {this.title.substring(0, 1)}
        </span>
        <span className="titlerest">
          {this.title.substring(1, this.title.length)}
        </span>
        </div>);
    }
    return(<div className="ctitle">
        <span className="titlef">
          {this.title.substring(0, 1)}
        </span>
        <span className="titlerest">
          {this.title.substring(1, this.title.length)}
        </span>
        </div>
    );
  }
}

export class LANGUAGE_TAG extends Component{
  constructor(props){
    super(props);
    console.log(this);
  }
  render(){
    var lang = this.props.language;
    
    return(<button className={lang}><div className="logo">{lang}<img className="langlogo" src={lang+".svg"} alt=""/></div></button>);
  }
}

export class TAG extends Component{
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
    this.state = {active: false}
    this.demo = props.demo
  }
  toggleActive(){
    if (this.state.active === true){
      this.setState({active: false});
    } else {
      this.setState({active: true});
    }
    console.log(this.state.active)
  }
  
  isCollapsed(){
    if (this.state.active === true){
      return(
        <>
        <p className="desc">Description:<br/>{this.demo.description}</p>
        <img className="demoimg" src={this.demo.imgurl} alt="Demo" />
        <br/><br/>
        {this.demo.buttons()}
        </>
      );
    } else {
      return;
    }
  }
  collapsemsg(){
    if (!this.state.active){
      return(<span className="expandmsg"onClick={() => {this.toggleActive()}}>Click Header To Expand</span>);
    } else {
      return
    }
  }
  render(){
    return(
      <div className="App-header">
      <div className="democard">
    <div className="panel-header" onClick={() => {this.toggleActive()}}>
      {this.demo.split_title(this.state.active)}
    </div>
    {this.isCollapsed()}
        <div className="tags">
        Languages: {this.demo.languages()}<br/>
        Frameworks: {this.demo.frameworks()}<br/>
        Tags: {this.demo.tags()}
        </div>{this.collapsemsg()}</div>
      </div>
    );
  }
}

const demos = [
  new Demo("SRG", "Attempts to consolidate Sexual, Relationship and Gender attributes to a 1 byte value and displays it as a pretty shield or badge.", "http://Srgindex.herokuapp.com", ["Javascript", "Python"], ["Web"], ["Flask", "Node", "React"], "/srgdemo.png", "https://github.com/Th3M4ttman/SRGServer"),
  new Demo("EzTools", "A suite of python modules packed to the brim with utility functions.", "http://pypi.com/ezcolors", ["Python"], ["Software"], [], "/Python.svg", "https://github.com/Th3M4ttman/ezcolors")
]

export class DemoSearch extends Component{
  render(){
    let cards = demos.map(demo => {return(<DemoCard demo={demo} key={demo.title}/>)});
    return(<div>{cards}</div>);
  }
}


export class Micro_Demo extends Demo{
  constructor(func, title, description, url, languages=[], tags=[], frameworks=[], imgurl="", source_url=null, project_type="Micro", priority=1){
    super(title, description, url, languages, tags, frameworks, imgurl, source_url, project_type, priority)
    this.function = func
  }
  page(){
    return(<InputButtonOutput function={this.function} title={this.title} label={this.description} button_text="Go" />);
  }
}

const micro_demos = {
  test: new Micro_Demo((e) => {return "Poop"}, "Test", "https://google.com", ["Javascript"])
};

export class MicroDemoPage extends Component{
  render(){
    var url = window.location.host.split('/');
    var demo = micro_demos[url];
    if (demo === undefined){
      return(<p>{url} Not Found</p>);
    }
    return(demo.page());
  }
}

export class DemoRouter extends Component{
  render(){
    return(
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route exact path="/" element={<DemoSearch />} />
        <Route path="Demo" element={<MicroDemoPage />} />
        <Route path="Demos" element={<DemoSearch />} />
        <Route path="*" element={<DemoSearch />} />
        </Route>
    </Routes>
    </Router>
    <div className="foot">
    <br/><br/><br/>
    Copyright © 2022 Matthew Harris - All Rights Reserved.
    <br/>
    <a className="priv" href="/privacy">
      Privacy Policy
    </a>
    <br/>
    </div>
    </>
    );
  }
}