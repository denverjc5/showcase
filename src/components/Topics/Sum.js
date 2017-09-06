import React, { Component } from 'react';

class Sum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  update1(val) {
    this.setState({number1: Number(val)});
  }

  update2(val) {
    this.setState({number2: Number(val)});
  }

  sum(val1, val2) {
    this.setState({sum: val1 + val2});
  }

  render() {
    return (<div className="puzzleBox sumPB">
      <h4>Sum</h4>
      <input className="inputLine" type="number" onChange={ (e) => this.update1(e.target.value) }></input>
      <input className="inputLine" type="number" onChange={ (e) => this.update2(e.target.value) }></input>
      <button className="confirmationButton" onClick={() => this.sum(this.state.number1, this.state.number2) }>Sum</button>
      <span className="resultsBox">{this.state.sum}</span>
    </div>);
  }
}















export default Sum;
