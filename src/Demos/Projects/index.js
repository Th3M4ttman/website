import '../../App.css';
import "./templates.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

export class InputButtonOutput extends Component{
  constructor(props){
    super(props);
    this.function = props.function;
    this.title = props.title;
    this.label = props.label;
    this.start_text = props.start_text;
    this.button_text = props.button;
    
    if (this.function === undefined){
      this.function = (i)=>{
        //alert(i);
        return i;
      };
    }
    this.state = {
      output: "Output"
    }
    
  }
  output(){
    return(<p>{this.state.output}</p>);
  }
  render(){
    return(
      <div className="App-header">
        <div className="inoutbox">
        <h1 className="Project-title">
          {this.title}
        </h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          let res = this.function(e.target[0].value);
          this.setState({output: res});
        }}>
          <label>{this.label}
            <input type="text">
              {this.start_text}
            </input>
          </label>
          <input type="submit" />
          <span>
              {this.output()}
          </span>
        </form>
      </div>
      </div>
    );
  }
}
