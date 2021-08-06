import React, { Component } from 'react'

export class second extends Component {
constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    // this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
}


handleChange(e) {
    // Before: this.setState({temperature: e.target.value});
    // alert("ass")
    this.props.onNumberChange(e.target.value);
    // alert(this.props.Numbers);
}

    render() {
    
        const number = this.props.Numbers;
        const reverseNumber = this.props.ReverseNumbers;

        return (
            <div>
           Generator    
           <br></br>

           <input
          value={this.props.number}
          onChange={this.handleChange} />
          <br></br>

          {(number.length>=1) ? <div>{number}{reverseNumber}</div>: <div></div>}
            </div>
        )
    }
}

export default second
