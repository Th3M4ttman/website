import '../../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import "./kana.css";

import Kanji from "./Kanji.json"
import KanjiMeanings from "./KanjiMeanings.json"
//import KanjiLevels from "./KanjiLevels.json"

const Hiragana = {'a': 'あ', 'i': 'い', 'u': 'う', 'e': 'え', 'o': 'お', 'ka': 'か', 'ki': 'き', 'ku': 'く', 'ke': 'け', 'ko': 'こ', 'sa': 'さ', 'shi': 'し', 'su': 'す', 'se': 'せ', 'so': 'そ', 'ta': 'た', 'chi': 'ち', 'tsu': 'つ', 'te': 'て', 'to': 'と', 'na': 'な', 'ni': 'に', 'nu': 'ぬ', 'ne': 'ね', 'no': 'の', 'ha': 'は', 'hi': 'ひ', 'fu': 'ふ', 'he': 'へ', 'ho': 'ほ', 'ma': 'ま', 'mi': 'み', 'mu': 'む', 'me': 'め', 'mo': 'も', 'ya': 'や', 'yu': 'ゆ', 'yo': 'よ', 'ra': 'ら', 'ri': 'り', 'ru': 'る', 're': 'れ', 'ro': 'ろ', 'wa': 'わ', 'wo': 'を', 'n': 'ん'}

const HiraganaD = {'a': 'あ', 'i': 'い', 'u': 'う', 'e': 'え', 'o': 'お', 'ka': 'か', 'ki': 'き', 'ku': 'く', 'ke': 'け', 'ko': 'こ', 'sa': 'さ', 'shi': 'し', 'su': 'す', 'se': 'せ', 'so': 'そ', 'ta': 'た', 'chi': 'ち', 'tsu': 'つ', 'te': 'て', 'to': 'と', 'na': 'な', 'ni': 'に', 'nu': 'ぬ', 'ne': 'ね', 'no': 'の', 'ha': 'は', 'hi': 'ひ', 'fu': 'ふ', 'he': 'へ', 'ho': 'ほ', 'ma': 'ま', 'mi': 'み', 'mu': 'む', 'me': 'め', 'mo': 'も', 'ya': 'や', 'yu': 'ゆ', 'yo': 'よ', 'ra': 'ら', 'ri': 'り', 'ru': 'る', 're': 'れ', 'ro': 'ろ', 'wa': 'わ', 'wo': 'を', 'n': 'ん','ga': 'が', 'gi': 'ぎ', 'gu': 'ぐ', 'ge': 'げ', 'go': 'ご', 'za': 'ざ', 'ji': 'ぢ', 'zu': 'づ', 'ze': 'ぜ', 'zo': 'ぞ', 'da': 'だ', 'de': 'で', 'do': 'ど', 'ba': 'ば', 'bi': 'び', 'bu': ' ぶ', 'be': 'べ', 'bo': 'ぼ', 'pa': 'ぱ', 'pi': 'ぴ', 'pu': 'ぷ', 'pe': 'ぺ', 'po': 'ぽ'}

const Katakana = {'a': 'ア', 'i': 'イ', 'u': 'ウ', 'e': 'エ', 'o': 'オ', 'ka': 'カ', 'ki': 'キ', 'ku': 'ク', 'ke': 'ケ', 'ko': 'コ', 'sa': 'サ', 'shi': 'シ', 'su': 'ス', 'se': 'セ', 'so': 'ソ', 'ta': 'タ', 'chi': 'チ', 'tsu': 'ツ', 'te': 'テ', 'to': 'ト', 'na': 'ナ', 'ni': 'ニ', 'nu': 'ヌ', 'ne': 'ネ', 'no': 'ノ', 'ha': 'ハ', 'hi': 'ヒ', 'hu': 'フ', 'he': 'ヘ', 'ho': 'ホ', 'ma': 'マ', 'mi': 'ミ', 'mu': 'ム', 'me': 'メ', 'mo': 'モ', 'ya': 'ヤ', 'yu': 'ユ', 'yo': ' ', 'ra': 'ラ', 'ri': 'リ', 'ru': 'ル', 're': 'レ', 'ro': 'ロ', 'wa': 'ワ', 'wo': 'ヲ', 'n': 'ン'}

const KatakanaD = {'a': 'ア', 'i': 'イ', 'u': 'ウ', 'e': 'エ', 'o': 'オ', 'ka': 'カ', 'ki': 'キ', 'ku': 'ク', 'ke': 'ケ', 'ko': 'コ', 'sa': 'サ', 'shi': 'シ', 'su': 'ス', 'se': 'セ', 'so': 'ソ', 'ta': 'タ', 'chi': 'チ', 'tsu': 'ツ', 'te': 'テ', 'to': 'ト', 'na': 'ナ', 'ni': 'ニ', 'nu': 'ヌ', 'ne': 'ネ', 'no': 'ノ', 'ha': 'ハ', 'hi': 'ヒ', 'hu': 'フ', 'he': 'ヘ', 'ho': 'ホ', 'ma': 'マ', 'mi': 'ミ', 'mu': 'ム', 'me': 'メ', 'mo': 'モ', 'ya': 'ヤ', 'yu': 'ユ', 'yo': ' ヨ', 'ra': 'ラ', 'ri': 'リ', 'ru': 'ル', 're': 'レ', 'ro': 'ロ', 'wa': 'ワ', 'wo': 'ヲ', 'n': 'ン', 'ga': 'ガ', 'gi': 'ギ', 'gu': 'グ', 'ge': 'ゲ', 'go': 'ゴ', 'za': 'ザ', 'ji': 'ヂ', 'zu': 'ヅ', 'ze': 'ゼ', 'zo': 'ゾ', 'da': 'ダ', 'de': 'デ', 'do': 'ド', 'ba': 'バ', 'bi': 'ビ', 'bu': 'ブ', 'be': 'ベ', 'bo': 'ボ', 'pa': 'パ', 'pi': 'ピ', 'pu': 'プ', 'pe': 'ペ', 'po': 'ポ'}


var HS = parseInt(localStorage.getItem("KanaHighScore"))
if (isNaN(HS)){
  HS = 0
  localStorage.setItem("KanaHighScore", 0);
}

export default class KanaGame extends Component{
  constructor(props){
    super(props);
    let poss = Object.keys(Hiragana)
    let r = poss[Math.floor(Math.random() * poss.length-1)]
    let kana = Hiragana[r];
    
    this.state = {
      score: 0,
      hiragana: true,
      katakana: false,
      kanji: false,
      dakuten: false,
      q: kana,
      a: r,
      correct: 0,
      current: "",
      hs: 0,
      t: "Hiragana"
    }
    this.q()
  }
  next(){
    let h = this.state.hiragana;
    let kk = this.state.katakana;
    let k = this.state.kanji;
    let d = this.state.dakuten;
    
    let poss = [];
    if (h === true){
      if (d === true){
        poss.push(HiraganaD)
      } else {
        poss.push(Hiragana)
      }
    }
    if (kk === true){
      if (d === true){
        poss.push(KatakanaD)
      } else {
        poss.push(Katakana)
      }
    }
    if (k === true){
      poss.push(Kanji)
    }
    let x = Math.floor(Math.random() * (poss.length))
    poss = poss[x]
    let r;
    let kana;
    let ke = Object.keys(poss)
    let t;
    
    if (ke[0] === "一"){
      t = "Kanji"
    } else if (poss[ke[0]] === "ア"){
      t = "Katakana"
    } else {
      t = "Hiragana"
    }
    console.log(t)
    if (t === "Kanji"){
      x = Math.floor(Math.random() * ke.length)
      r = ke[x]
      kana = r
      r = [...Kanji[r], ...KanjiMeanings[r]]
      console.log("Answers=" + r)
      
    } else {
      r = ke[Math.floor(Math.random() * ke.length)]
      kana = poss[r]
    }
    
    if (kana === undefined){
      alert("Fixed")
      this.next()
      return
    }
    this.setState({q: kana, a: r, t: t})
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
    if (this.state.t === "Kanji"){
      var s = false
      for (let an of this.state.a){
        console.log(an.toLowerCase())
        if (an.toLowerCase() === a.value.toLowerCase()){
          
          s = true
        }
      }
    if (s === true){
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
    return
  }
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
        {this.state.t}
      </span>
      </>
      )})
  }
  hbutton(){
    if (this.state.hiragana === true){
      return (
        <div className="kanabuttont" onClick={()=>{this.setState({hiragana: false})}}>
          あ
        </div>
      );
    }
    return (
        <div className="kanabuttonf" onClick={()=>{this.setState({hiragana: true})}}>
          あ
        </div>
      );
  }
  kkbutton(){
    if (this.state.katakana === true){
      return (
        <div className="kanabuttont" onClick={()=>{this.setState({katakana: false})}}>
          ア
        </div>
      );
    }
    return (
        <div className="kanabuttonf" onClick={()=>{this.setState({katakana: true})}}>
          ア
        </div>
      );
  }
  kbutton(){
    if (this.state.kanji === true){
      return (
        <div className="kanabuttont" onClick={()=>{this.setState({kanji: false})}}>
          本
        </div>
      );
    }
    return (
        <div className="kanabuttonf" onClick={()=>{this.setState({kanji: true})}}>
          本
        </div>
      );
  }
  dbutton(){
    if (this.state.dakuten === true){
      return (
        <div className="kanabuttont" onClick={()=>{this.setState({dakuten: false})}}>
          "/°
        </div>
      );
    }
    return (
        <div className="kanabuttonf" onClick={()=>{this.setState({dakuten: true})}}>
          "/°
        </div>
      );
  }
  buttons(){
    return (
     <span>
      {this.hbutton()}
      {this.kkbutton()}
      {this.kbutton()}
      {this.dbutton()}
     </span>
    );
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
          if (this.state.hiragana === true || this.state.katakana === true || this.state.kanji === true){
            this.answer(e.target[0]);
          }
        }}>
        <input className="kanainput" name="Guess" id="Guess" type="text" />
        <br/>
        <input type="submit" value="Guess" />
        </form>
        <br/>
        {this.buttons()}
      </div>
    );
  }
}