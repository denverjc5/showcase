import React, { Component } from 'react';

class EvenAndOdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }

  getInput(value) {
    this.setState({
      userInput: value,
    })
  }

  split(input) {
    var evens = [];
    var odds = [];

    var values = input.split(",");

    for (var key in values) {
      if (values[key] % 2 === 0) {
        evens.push(Number(values[key]));
      }
      else {
        odds.push(Number(values[key]));
      }
    }

    this.setState({
      evenArray: evens,
      oddArray: odds
    });
  }

  render() {
    return (
        <div className="puzzleBox evenAndOddPB">
        <h4> Evens and Odds </h4>
        <input className="inputLine" onChange={ e => this.getInput(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.split(this.state.userInput) }>Split</button>
        <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    );
  }
}

export default EvenAndOdd;
