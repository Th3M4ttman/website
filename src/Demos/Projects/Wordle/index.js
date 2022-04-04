import '../../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import "./wordle.css";

class Letter extends Component{
  constructor(props){
    super(props);
    this.state = {
      letter: props.letter,
      color: props.color
    }
  }
  render(){
    let color = this.state.color;
    if (color === -1){
      this.divclass = "letterno";
    } else if (color === 0){
      this.divclass = "lettermaybe";
    } else if (color === 1){
      this.divclass = "letteryes";
    } else {
      this.divclass = "letter";
    }
    return(
      <div className={this.divclass}>
        {this.state.letter}
      </div>
    );
  }
}

class Attempt extends Component{
  constructor(props){
    super(props);
    let letters = [];
    let letter;
    for (let i = 0; i < 6; i+=1){
      if (props.guess === undefined){
        letter = " ";
      } else {
        letter = props.guess[i];
      }
      letters.push(<Letter letter={letter} key={this.id+i}/>);
    }
    
    this.state = {
      letters: letters
    }
  }
  guess(g){
    alert(g);
    let letters = [];
    for (let i = 0; i < 6; i+=1){
      letters.push(<Letter letter={g[i]} key={this.id+i}/>);
    }
    this.setState({letters: letters})
  }
  render(){
    return(
      <span className="attempt">
        {this.state.letters}
      </span>
    );
  }
}

export default class Wordle extends Component{
  constructor(props){
    super(props);
    this.state = {
      word: "testum",
      attempts: [],
      a: 0
    }
  }
  next(guess){
    var attempts = this.state.attempts;
    attempts[this.state.a] = (<Attempt guess={guess} word={this.state.word} />);
    alert(guess);
    
    this.setState({a: this.state.a + 1, attempts: attempts});
    console.log(this.state.attempts);
    console.log(attempts)
  }
  
  create_attempts(){
    let attempts = this.state.attempts;
    while (attempts.length < 6){
      attempts.push(<Attempt />)
    }
    
  }
  render(){
    return(
      
      <div className="App-header">
        wordle
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