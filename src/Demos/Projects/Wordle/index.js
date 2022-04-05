import '../../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import "./wordle.css";

function Letter(props={letter: " ", color: -2}){
    let color = props.color;
    let divclass = "letter";
    let letter = props.letter;
    if (color === -1){
      divclass = "letterno";
    } else if (color === 0){
      divclass = "lettermaybe";
    } else if (color === 1){
      divclass = "letteryes";
    }
    return(
      <div className={divclass}>
        {letter}
      </div>
    );
  }


function Attempt(props){
  let guess = props.guess;
    return(
      <span className="attempt">
        <Letter letter={guess[0]}/>
        <Letter letter={guess[1]}/>
        <Letter letter={guess[2]}/>
        <Letter letter={guess[3]}/>
        <Letter letter={guess[4]}/>
        <Letter letter={guess[5]}/>
      </span>
    );
  }


export default class Wordle extends Component{
  constructor(props){
    super(props);
    this.state = {
      word: "testum",
      attempts: ["——————", "——————", "——————", "——————", "——————", "——————"],
      a: 0
    }
  }
  next(guess){
    let a = this.state.attempts
    a[this.state.a] = guess;
    this.setState({a: this.state.a + 1, attempts: a});
  }
  
  render(){
    let attempts = this.state.attempts;
    return(
      <div className="App-header">
        wordle
        <Attempt guess={attempts[0]} />
      <Attempt guess={attempts[1]} />
      <Attempt guess={attempts[2]} />
      <Attempt guess={attempts[3]} />
      <Attempt guess={attempts[4]} />
      <Attempt guess={attempts[5]} />
        <br/>
        <form onSubmit={(e)=>{e.preventDefault();
          this.next(e.target[0].value);
        }}>
        <input name="Guess" id="Guess" type="text" required />
        <input type="submit" value="Guess" />
        </form>
      </div>
    );
  }
}