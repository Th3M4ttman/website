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
    this.img = props.img;
    
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
    return(this.state.output);
  }
  split_title(){
      return(<div className="demotitle">
        <span className="demotitlef">
          {this.title.substring(0, 1)}
        </span>
        <span className="demotitlerest">
          {this.title.substring(1, this.title.length)}
        </span>
        </div>);
    }
  imgshow(){
    if (this.img !== undefined){
      return (<img className="mdemoimg" src={this.img} alt="" />);
    }
  }
  render(){
    return(
      <div className="App-header">
      {this.imgshow()}
        <div className="inoutbox">
        <br/>
        {this.split_title()}
        <form onSubmit={(e) => {
          e.preventDefault();
          //console.log(e);
          let res = this.function(e.target[0].value);
          this.setState({output: res});
        }}>
          <p className="demodesc">
            {this.label}
          </p>
          <textarea className="intext" defaultValue={this.start_text} />
          <br/><br/>
          <input className="demobutton" type="submit" value="Go" />
          <br/><br/>
          <textarea className="outtext" value={this.output()} readOnly />
        </form>
      </div>
      </div>
    );
  }
}
