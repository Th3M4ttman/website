import '../../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';


class Tag extends Component {
  constructor(props){
    super(props)
    this.state = {
      proto: props.proto,
      props: props,
      children: []
    }
  }
  create(){
    return("")
  }
  render(){
    return(
      <>
      {this.create()}
      </>
    );
  }
}

class P extends Tag{
  create(){
    let props = this.state.props;
    return(
      <p {...props} style={{color:"red"}}>
      {this.props.children}
      </p>
    );
  }
}

export default class Test extends Component{
  render(){
    return(
      <>
      <P> yo </P>
      <p> bitch </p>
      </>
    );
  }
}