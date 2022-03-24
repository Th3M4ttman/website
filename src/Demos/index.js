import '../App.css';
import "./demos.css";
import Navigation from "../Components/Navigation";
import { WithContext as ReactTags } from 'react-tag-input';
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
    this.add = null;
    this.t = null;
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
    let x = this._languages.map(lang => {return(<LANGUAGE_TAG language={lang} key={lang} add={this.add} t={this.t} />)});
    return x;
  }
  frameworks(){
    let x = this._frameworks.map(tag => {return(<TAG tag={tag} key={tag} add={this.add} t={this.t}/>)});
    return x;
  }
  tags(){
    let x = this._tags.map(tag => {return(<TAG tag={tag} key={tag} add={this.add} t={this.t}/>)});
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
  render(){
    var lang = this.props.language;
    return(<button className={lang} onClick={()=>{this.props.add({id: lang, text: lang})}}><div className="logo">{lang}<img className="langlogo" src={lang+".svg"} alt=""/></div></button>);
  }
}

export class TAG extends Component{
  render(){
    var tag = this.props.tag;
    //console.log(this.props)
    if (this.props.icon != null){
      var tagicon = this.props.icon;
      return(
      <button className="tag" onClick={()=>{this.props.add({id: tag, text: tag})}}>
       {tag}<img className="tagicon" src={tagicon} alt=""/>
      </button>);
    } else {
      return(
      <button className="tag" onClick={()=>{this.props.add({id: tag, text: tag})}}>{tag}</button>);
    }
  }
}



export class DemoCard extends Component {
  constructor(props){
    super(props);
    this.state = {active: false, tags: []}
    this.demo = props.demo
    this.boxclass = "democard"
    if (this.demo.project_type !== "Full"){
      this.boxclass = "microdemocard"
    }
    if (this.demo._tags.includes("Web")){
      this.boxclass += "w";
    } else if (this.demo._tags.includes("Games")){
      this.boxclass += "g";
    } else if (this.demo._tags.includes("Software")){
      this.boxclass += "s";
    }
    this.demo.add = props.add;
    this.demo.t = props.t;
  }
  toggleActive(){
    if (this.state.active === true){
      this.setState({active: false});
    } else {
      this.setState({active: true});
    }
    //console.log(this.state.active)
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
      <>
      <div className={this.boxclass}>
    <div className="panel-header" onClick={() => {this.toggleActive()}}>
      {this.demo.split_title(this.state.active)}
    </div>
    {this.isCollapsed()}
        <div className="tags">
        Languages: {this.demo.languages()}<br/>
        Frameworks: {this.demo.frameworks()}<br/>
        Tags: {this.demo.tags()}
        </div>{this.collapsemsg()}</div>
      <br/>
      </>
    );
  }
}

const demos = [
  new Demo("SRG", "Attempts to consolidate Sexual, Relationship and Gender attributes to a 1 byte value and displays it as a pretty shield or badge.", "http://Srgindex.herokuapp.com", ["Javascript", "Python"], ["Web"], ["Flask", "Node", "React"], "/srgdemo.png", "https://github.com/Th3M4ttman/SRGServer"),
  new Demo("EzTools", "A suite of python modules packed to the brim with utility functions.", "http://pypi.com/ezcolors", ["Python"], ["Software"], [], "/Python.svg", "https://github.com/Th3M4ttman/ezcolors")
]


export class Micro_Demo extends Demo{
  constructor(func, title, description, url, start_text="", languages=[], tags=[], frameworks=[], imgurl="/Javascript.svg", source_url=null, project_type="Micro", priority=1){
    super(title, description, url, languages, tags, frameworks, imgurl, source_url, project_type, priority)
    this.function = func;
    this.start_text = start_text;
  }
  page(){
    return(<InputButtonOutput function={this.function} title={this.title} label={this.description} button_text="Go" start_text={this.start_text}/>);
  }
}

const micro_demos = [
  new Micro_Demo((e) => {
    let out = "";
    let up = true;
    for (let ch of e){
      if (up === true){
        out += ch.toUpperCase();
        up = false;
      } else {
        out += ch.toLowerCase();
        up = true;
      }
    };
    return out}, "Sarcastasize", "Turns any text into sarcastic upper-lower case text","https://demo.matthewharris.tech/Sarcastasize", "Input", ["Javascript"], ["Web", "Micro Demo"], [], "/spongebob.gif")
];

export class MicroDemoPage extends Component{
  render(){
    var url = window.location.href.split('/')
    url = url[url.length - 1]
    var demo = undefined;
    for (let d of micro_demos){
      if (d.title === url){
        demo = d;
      }
    }
    if (demo === undefined){
      return(<p>{url} Not Found</p>);
    }
    return(demo.page());
  }
}

const SUGGESTIONS = [
  "Web", "Software", "Games"]
  
for (let demo of demos){
  for (let tag of demo._tags){
    if (!SUGGESTIONS.includes(tag)){
      SUGGESTIONS.push(tag);
    }
  }
  for (let tag of demo._frameworks){
    if (!SUGGESTIONS.includes(tag)){
      SUGGESTIONS.push(tag);
    }
  }
  for (let tag of demo._languages){
    if (!SUGGESTIONS.includes(tag)){
      SUGGESTIONS.push(tag);
    }
  }
}

for (let demo of micro_demos){
  for (let tag of demo._tags){
    if (!SUGGESTIONS.includes(tag)){
      SUGGESTIONS.push(tag);
    }
  }
  for (let tag of demo._frameworks){
    if (!SUGGESTIONS.includes(tag)){
      SUGGESTIONS.push(tag);
    }
  }
  for (let tag of demo._languages){
    if (!SUGGESTIONS.includes(tag)){
      SUGGESTIONS.push(tag);
    }
  }
}


const Tagsearch = (props) => {
  //console.log(props)
  const suggestions = SUGGESTIONS.map(suggestion => {
  return {
    id: suggestion,
    text: suggestion
  };
});

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

  var [tags, setTags] = React.useState([
  ]);
  const handleDelete = i => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = tag => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = index => {
    console.log('The tag at index ' + index + ' was clicked');
  };
  const results = (_tags) => {
    let t = []
    if (_tags.length === 0){
      let out = []
      for (let demo of demos){
        out.push(<DemoCard demo={demo} key={demo.title} add={handleAddition} t={tags}/>)
      }
      for (let demo of micro_demos){
        out.push(<DemoCard demo={demo} key={demo.title} add={handleAddition} t={_tags} />)
      }
      return out
    }
    for (let demo of demos){
      let inc = []
      for (let tag of tags){
        if (demo._tags.includes(tag.text) || demo._frameworks.includes(tag.text) || demo._languages.includes(tag.text)){
          inc.push(true);
        } else {
          inc.push(false);
        }
      }
      if (!inc.includes(false)){
        t.push(demo);
      }
    }
    for (let demo of micro_demos){
      let inc = []
      for (let tag of tags){
        if (demo._tags.includes(tag.text) || demo._frameworks.includes(tag.text) || demo._languages.includes(tag.text)){
          inc.push(true);
        } else {
          inc.push(false);
        }
      }
      if (!inc.includes(false)){
        t.push(demo);
      }
    }
    let out = t.map((demo) => {
      return (<DemoCard demo={demo} key={demo.title} t={tags} add={handleAddition} />)
    });
    return out
  }
  return (
    <div className="demosearch">
      <div>
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="bottom"
          autocomplete
        />
      </div>
      <br />
      {results(tags)}
    </div>
  );
};


export class DemoSearch extends Component{
  constructor(props){
    super(props);
    this.state = {
      web: true,
      software: true,
      games: true,
      tags: []
    }
  }
  web(){
    if (this.state.web === true){
      return(
        <button className="webt" onClick={(e)=>{this.setState({web:false})}}>Web</button>
      );
    } else {
      return(
        <button className="webf" onClick={(e)=>{
          this.setState({web:true});
          }}>Web</button>
      );
    }
  }
  software(){
    if (this.state.software === true){
      return(
        <button className="softwaret" onClick={(e)=>{this.setState({software:false})}}>Software</button>
      );
    } else {
      return(
        <button className="softwaref" onClick={(e)=>{this.setState({software:true})}}>Software</button>
      );
    }
  }
  games(){
    if (this.state.games === true){
      return(
        <button className="gamest" onClick={(e)=>{this.setState({games:false})}}>Games</button>
      );
    } else {
      return(
        <button className="gamesf" onClick={(e)=>{this.setState({games:true})}}>Games</button>
      );
    }
  }
  buttons(){
    return(
      <span className="sectorspan">{this.web()}{this.software()}{this.games()}</span>
    );
  }
  filter(_demos){
    let cards = _demos.map(demo => {
      if (this.state.tags.length > 0){
        //console.log(this.state.tags)
        for (let t of this.state.tags){
          if (demo._tags.includes(t)){
            
            return(<DemoCard demo={demo} key={demo.title} />)
          }
        } return null;
      }
      if (demo._tags.includes("Web") && this.state.web === false){
        return null;
      }
      if (demo._tags.includes("Software") && this.state.software === false){
        return null;
      }
      if (demo._tags.includes("Games") && this.state.games === false){
        return null;
      }
      return(<DemoCard demo={demo} key={demo.title} />)});
    return cards;
  }
  render(){
    //console.log(process.env);
    return(
    <div className="App-header">
    <div className="titlenu">
        <span className="titlef">
          D
        </span>
        <span className="titlerest">
          emos
        </span>
        </div>
    <br/>
      <Tagsearch tags={this.props.tags} />
    </div>);
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
        <Route path="Demos" element={<DemoSearch />} />
        <Route path="*" element={<MicroDemoPage />} />
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
export { Tagsearch };