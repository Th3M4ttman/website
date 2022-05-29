import '../App.css';
import "./demos.css";
//import Navigation from "../Components/Navigation";
import { WithContext as ReactTags } from 'react-tag-input';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
//import {BrowserView, MobileView} from 'react-device-detect';
import { Route, Routes } from 'react-router-dom';
//import { BrowserRouter as Router} from 'react-router-dom';
import { InputButtonOutput } from "./Projects"
import Wordle from "./Projects/Wordle";
import KanaGame from "./Projects/KanaGame";
import TargetedCV from "./Projects/TargetedCV";

export class Demo{
  constructor(title, description, url, languages=[], tags=[], frameworks=[], imgurl="", comp=null, source_url=null, project_type="Full", priority=0){
    this.comp = comp;
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
    this._tags.push("Demo")
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
  cl(t){
    if (t === "Games"){
      return "gamestag"
    } else if (t === "Web"){
      return "webtag"
    } else if (t === "Software"){
      return "softwaretag"
    } else if (t === "Micro Demo"){
      return "microtag"
    }
    return "tag"
  }
  render(){
    var tag = this.props.tag;
    //console.log(this.props)
    if (this.props.icon != null){
      var tagicon = this.props.icon;
      return(
      <button className={this.cl(tag)} onClick={()=>{this.props.add({id: tag, text: tag})}}>
       {tag}<img className="tagicon" src={tagicon} alt=""/>
      </button>);
    } else {
      return(
      <button className={this.cl(tag)}onClick={()=>{this.props.add({id: tag, text: tag})}}>{tag}</button>);
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
      if (this.demo._tags.includes("Games")){
      this.boxclass += "g";
      }
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
  new Demo("EzTools", "A suite of python modules packed to the brim with utility functions.", "http://pypi.com/ezcolors", ["Python"], ["Software"], [], "/Python.svg", "https://github.com/Th3M4ttman/ezcolors"),
  new Demo("Wordle-Clone", "A simple clone of the word game: wordle.", "http://demo.matthewharris.tech/Wordle-Clone", ["Javascript"], ["Games", "Web"], [], "/Javascript.svg", (<Wordle />)),
  new Demo("KanaGame", "A japanese kana reading game.", "http://demo.matthewharris.tech/KanaGame", ["Javascript"], ["Games", "Web"], [], "/Javascript.svg", (<KanaGame />)),
  new Demo("TargetedCV", "Extract keywords and score your cv against a job posting", "http://demo.matthewharris.tech/TargetedCV", ["Javascript"], ["Software", "Web"], [], "/Javascript.svg", (<TargetedCV />))
]

export class DemoPage extends Component{
  render(){
    var url = window.location.href.split('/')
    url = url[url.length - 1]
    var demo = undefined;
    for (let d of demos){
      
      if (d.title === url){
        demo = d;
      }
    }
    if (demo === undefined){
      return(<p>{url} Not Found</p>);
    }
    return(demo.comp);
  }
}

export class Micro_Demo extends Demo{
  constructor(func, title, description, url, start_text="", languages=[], tags=[], frameworks=[], imgurl="/Javascript.svg", source_url=null, project_type="Micro", priority=1){
    super(title, description, url, languages, tags, frameworks, imgurl, source_url, project_type, priority)
    this.function = func;
    this.start_text = start_text;
  }
  page(){
    return(<InputButtonOutput function={this.function} title={this.title} label={this.description} button_text="Go" start_text={this.start_text} img={this.imgurl}/>);
  }
}

const micro_demos = [
  new Micro_Demo((e) => {
    let out = "";
    for (let word of e.split(" ")){
      if ("aeiouAEIOU".includes(word[0])){
        out += word + "yay "
      } else {
        out += word.substring(1, word.length);
        out += word.substring(0,1) + "ay "
      }
    };
    return out}, "PigLatin", "Translates text to pig latn. ","https://demo.matthewharris.tech/PigLatin", "Input", ["Javascript"], ["Web", "Micro Demo"], [], "/pig.png"),
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


function Tagsearch(props){
  console.log(props.props);
  
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
  const [tags, setTags] = React.useState(props.props.map((t)=>{if (t !== undefined){return {id: t, text: t}}
    return []
  }))
  
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
    console.log(_tags)
    if (_tags === [undefined]){
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
      if (tags === [undefined]){
        inc.push(true)
      } else {
      for (let tag of tags){
        if (demo._tags.includes(tag.text) || demo._frameworks.includes(tag.text) || demo._languages.includes(tag.text)){
          inc.push(true);
        } else {
          inc.push(false);
        }
      }
      }
      if (!inc.includes(false)){
        t.push(demo);
      }
    }
    for (let demo of micro_demos){
      let inc = []
      if (tags === [undefined]){
        inc.push(true)
      } else {
      for (let tag of tags){
        if (demo._tags.includes(tag.text) || demo._frameworks.includes(tag.text) || demo._languages.includes(tag.text)){
          inc.push(true);
        } else {
          inc.push(false);
        }
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
  //handleAddition(props.props.map((tag) => {return {id: tag, text: tag}}))
  
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
          autofocus={false}
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
      section: props.section
    }
    if (this.state.section === undefined){
      this.setState({section: ["Demo"]})
    }
  }
  search(start){
    
    if (start === undefined){
      return (<Tagsearch props={["Demo"]}/>)
    }
    return (<Tagsearch props={[start]}/>)
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
      {this.search(this.state.section)}
    </div>);
  }
}

export class DemoRouter extends Component{
  constructor(props){
    super(props);
    let nav = props.nav;
    if (nav === "true"){
      nav = true;
    } else {
      nav = false;
    }
    this.state = {
      nav: nav
    }
    
  }
  render(){
    return(
    <>
        <Routes>
        <Route exact path="/" element={<DemoSearch />} />
        <Route path="Micro/*" element={<MicroDemoPage />} />
        <Route path="*" element={<DemoPage />} />
        </Routes>
        
        </>
        );
    }
}
export { Tagsearch };