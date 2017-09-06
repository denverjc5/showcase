import React, { Component } from 'react';

class Palindrome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      palindrome: ''
    }
  }

  getInput(value) {
    this.setState({
      userInput: value
    });
  }

  isPalindrome(value) {
    var isPalindrome = (value.split('').reverse().join('') === value) ? 'yes' : 'no';

    this.setState({
      palindrome: isPalindrome
    });
  }

  render() {
    return(<div className="puzzleBox PalindromePB">
      <h4>Palindrome</h4>
      <input className="inputLine" onChange={e => this.getInput(e.target.value)}></input>
      <button className="confirmationButton" onClick={() => this.isPalindrome(this.state.userInput)}>Check</button>
      <span className="resultsBox">result: {this.state.palindrome}</span>
    </div>);
  }
}

export default Palindrome;
