import '../../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import "./wordle.css";
import axios from "axios";
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'









export default class TargetedCV extends Component{
  constructor(props){
    super(props);
    this.state = {
      auth_token: null,
      skills: [],
      job: "",
      score: 0
    }
  }
  auth(c, s){
    let headers = {'Content-Type': 'application/x-www-form-urlencoded'}
    let payload = "client_id=" + c + "&client_secret=" + s + "&grant_type=client_credentials&scope=emsi_open"
    
    axios.post('https://auth.emsicloud.com/connect/token', payload, {headers})
    .then( response => {
      this.setState({auth_token: response.data.access_token});
      console.log(response);
    })
  }
  extract(text){
    let headers = {'Authorization': 'Bearer '+this.state.auth_token, 'Content-Type': 'application/json'}
    
    let payload = JSON.stringify({text: text, confidenceThreshold: 0.6 })
    axios.post('https://emsiservices.com/skills/versions/latest/extract?language=en', payload, {headers})
    .then( response => {
      alert("Skills Extracted")
      console.log(response);
      let out = []
      for (let skill of response.data.data){
        out.push(skill.skill.name)
      }
      this.setState({skills: out})
    })
  }
  authform(){
    if (this.state.auth_token === null){
      return (
        <form onSubmit={(e)=>{e.preventDefault();
          let client = e.target[0].value;
          let secret = e.target[1].value;
          this.auth(client, secret)
        }}>
        <label for="Client">Client ID</label>
        <br/>
        <input name="Client" id="Client" type="text" required />
        <br/>
        <label for="Secret">Client Secret</label>
        <br/>
        <input name="Secret" id="Secret" type="text" required />
        <br/>
        <input type="submit" value="Authorize" />
        </form>
      );
    }
    return (<p> Authorized </p>)
  }
  jobform(){
    return (
        <form onSubmit={(e)=>{e.preventDefault();
          let job = e.target[0].value;
          let extract = e.target[1].checked;
          this.setState({job: job});
          if (extract === true){
            this.extract(job)
          }
          console.log(this)
        }}>
        <label for="Job">Job Description</label>
        <br/>
        <textarea name="Job" className="jobdesc" id="Job" type="text" required />
        <br/>
       <label for="extract">Extract Skills</label>
       <br/>
       <input name="extract" id="extract" type="checkbox" className="espan"/>
       <br/>
       note you only get 50 requests per month so don't just spam these requests
        <input type="submit" value="Set Job Description" />
        </form>
      );
  }
  skillsform(){
    return (
        <form onSubmit={(e)=>{e.preventDefault();
          let skills = e.target[1].value.split("\n");
          //alert(skills);
          this.setState({skills: skills});
        }}>
        <label for="Skills">Skills</label>
        <br/>
        <textarea className="jobdesc" name="Skills" id="Skills" type="text" value={this.state.skills.join("\n")} />
        <br/>
        <label for="NewSkills">NewSkills</label>
        <br/>
        <textarea className="jobdesc" name="NewSkills" id="NewSkills" type="text" required />
        <input type="submit" value="update skills" />
        </form>
        
      );
  }
  score(cv){
    let score = 0;
    cv = cv.toLowerCase()
    for (let word of this.state.skills){
      word = word.toLowerCase()
      if (cv.includes(word)){
        score += 1;
      }// else {
        //console.log(word)
        //console.log(cv)
      //}
      //console.log(score)
    }
    return Math.round((score / this.state.skills.length) * 100)
  }
  scorecolor(){
    if (this.state.score >= 90){
      return "#00ffa0"
    } else if (this.state.score > 70){
      return "#F67128"
    } else {
      return "#f00"
    }
  }
  cvform(){
    return (
        <>
        <form>
        <label for="CV">CV Scoring</label>
        <br/>
        <textarea className="jobdesc" name="CV" id="CV" type="text" onChange={(e)=>{e.preventDefault();
          this.setState({score: this.score(e.target.value)});
        }}/>
        </form>
        <br/>
        Keyword Density
        <br/>
        <div style={{ width: 200, height: 200 }}>
        <CircularProgressbar value={this.state.score} text={`${this.state.score}%`}
        styles={buildStyles({
          pathColor: this.scorecolor(),
          textColor: this.scorecolor()
        })}/>
        </div>
        </>
      );
  }
  render(){
    return(
      <div className="App-header">
        <br/>
        <h1>CV Targeter</h1>
        <br/>
        {this.authform()}
        <br/>
        {this.jobform()}
        <br/>
        {this.skillsform()}
        <br/>
        {this.cvform()}
        <br/>
      </div>
    );
  }
}