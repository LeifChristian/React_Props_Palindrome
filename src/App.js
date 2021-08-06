import './App.css';
import Second from "./second";

import React, { Component } from 'react'

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      Numbers: ".", ReverseNumbers: String
  }
this.onNumberChange = this.onNumberChange.bind(this);

  }

onNumberChange = (event) => {
let anus = event;
let myAnus = this.state.Numbers
this.setState({Numbers: anus})
// if(anus.length > 1) {}
let reverseAnus = myAnus.toString().split('').reverse().join('');

this.setState({ReverseNumbers: reverseAnus}); 


// alert(reverseAnus);

}

  render() {
    return (
      <div>
       Palindrome
        <Second Numbers={this.state.Numbers}
        ReverseNumbers={this.state.ReverseNumbers}
        onNumberChange={this.onNumberChange}/>
        
      </div>
    )
  }
}

export default App
