import '../../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import "./kana.css";

const Hiragana = {'a': 'あ', 'i': 'い', 'u': 'う', 'e': 'え', 'o': 'お', 'ka': 'か', 'ki': 'き', 'ku': 'く', 'ke': 'け', 'ko': 'こ', 'sa': 'さ', 'shi': 'し', 'su': 'す', 'se': 'せ', 'so': 'そ', 'ta': 'た', 'chi': 'ち', 'tsu': 'つ', 'te': 'て', 'to': 'と', 'na': 'な', 'ni': 'に', 'nu': 'ぬ', 'ne': 'ね', 'no': 'の', 'ha': 'は', 'hi': 'ひ', 'fu': 'ふ', 'he': 'へ', 'ho': 'ほ', 'ma': 'ま', 'mi': 'み', 'mu': 'む', 'me': 'め', 'mo': 'も', 'ya': 'や', 'yu': 'ゆ', 'yo': 'よ', 'ra': 'ら', 'ri': 'り', 'ru': 'る', 're': 'れ', 'ro': 'ろ', 'wa': 'わ', 'wo': ' ', 'n': 'ん', 'ga': 'が', 'gi': 'ぎ', 'gu': 'ぐ', 'ge': 'げ', 'go': 'ご', 'za': 'ざ', 'ji': 'ぢ', 'zu': 'づ', 'ze': 'ぜ', 'zo': 'ぞ', 'da': 'だ', 'de': 'で', 'do': 'ど', 'ba': 'ば', 'bi': 'び', 'bu': ' ぶ', 'be': 'べ', 'bo': 'ぼ', 'pa': 'ぱ', 'pi': 'ぴ', 'pu': 'ぷ', 'pe': 'ぺ', 'po': 'ぽ'}

var HS = parseInt(localStorage.getItem("KanaHighScore"))
if (isNaN(HS)){
  HS = 0
  localStorage.setItem("KanaHighScore", 0);
}

export default class KanaGame extends Component{
  constructor(props){
    super(props);
    let poss = [];
    poss.push(...Object.keys(Hiragana))
    let r = poss[Math.floor(Math.random() * poss.length-2)]
    let kana = Hiragana[r];
    
    this.state = {
      score: 0,
      hiragana: true,
      katakana: false,
      kanji: false,
      q: kana,
      a: r,
      correct: 0,
      current: "",
      hs: 0
    }
    this.q()
  }
  next(){
    let h = this.state.hiragana;
    //let kk = this.state.katakana;
    //let k = this.state.kanji;
    
    let poss = [];
    if (h === true){
      poss.push(...Object.keys(Hiragana))
    }
    let r = poss[Math.floor(Math.random() * poss.length-1)]
    
    let kana = Hiragana[r];
    
    this.setState({q: kana, a: r})
    this.q()
  }
  set_hs(score, correct){
    let newscore, newcorrect, newhs;
    newhs = HS
    if (correct === true){
      newscore = this.state.score + 1
      newcorrect = 1
      if (newscore > HS){
        newhs = newscore
      }
    } else {
      newscore = 0
      newcorrect = -1
    }
    
    this.setState({highscore: newhs, score: newscore, correct: newcorrect})
    localStorage.setItem("KanaHighScore", newhs)
    HS = newhs
  }
  answer(a){
    if (a.value.toLowerCase() === this.state.a){
      this.q(1)
      this.set_hs(this.state.score, true)
      //alert("Correct")
    } else {
      this.set_hs(this.state.score, false)
      this.q(-1)
      //alert("Incorrect, Answer: "+this.state.a)
    }
    a.value = "";
    
    setTimeout(()=>{this.next()}, 1000);
  }
  q(correct){
    let c;
    if (correct === 1){
      c = "correct"
    } else if (correct === -1){
      c = "incorrect"
    } else {
      c = "question"
    }
    this.setState({current: (
      <>
      <div className={c}>
        <h2>{this.state.q}</h2>
      </div>
      <span className="kana">
        Hiragana
      </span>
      </>
      )})
  }
  render(){
    if (this.state.current === ""){
      this.q()
    }
    return(
      <div className="App-header">
        <span className="scores"><div className="score"><p className="kana">Score<br/> {this.state.score}</p></div>
        <div className="highscore"><p className="kana">Highscore<br/>{HS}</p></div>
        </span>
        <h1 className="kana">KanaGame</h1>
        {this.state.current}
        <br/>
        <form onSubmit={(e)=>{e.preventDefault();
          this.answer(e.target[0]);
        }}>
        <input name="Guess" id="Guess" type="text" />
        <input type="submit" value="Guess" />
        </form>
      </div>
    );
  }
}