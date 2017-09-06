import React, { Component } from 'react';

class FilterString extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unFilteredArray: ["abc", "def", "cba", "fed"],
      userInput: "",
      filteredArray: []
    }
  }

  filter(input) {
    var filterArray = this.state.unFilteredArray.filter(value => value.includes(input));
    this.setState({filteredArray: filterArray});
  }

  render() {
    return (
        <div className="puzzleBox filterStringPB">
          <h4>Filter String</h4>
        <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
        <input className="inputLIne" onChange={(e) => this.setState({userInput: e.target.value})}></input>
        <button className="confirmationButton" onClick={() => this.filter(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterStringPB">{JSON.stringify(this.state.filteredArray)}</span>

        </div>
    );
  }
}

export default FilterString;
