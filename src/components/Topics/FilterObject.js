import React, { Component } from 'react';

class FilterObject extends Component {
  constructor(props) {
    super (props);
    this.state = {
      unfilteredArray: [{
        name: 'Denver',
        age: 38,
        status: 'Single',
        pets: true
      }, {
        name: 'Uriah',
        age: 25,
        status: 'Married'
      }, {
        name: 'Robby',
        height: '6\' 2"'
      }],
      userInput: '',
      filteredArray: []
    }
  }

  getInput(value) {
    this.setState({
      userInput: value
    });
  }

  filter(prop) {
    var filter = [];
    var arr = this.state.unfilteredArray;

    for (var key in arr) {
      var obj = arr[key];

      if (obj.hasOwnProperty(prop)) {
        filter.push(obj);
      }
    }

    this.setState({
      filteredArray: filter
    });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Unfiltered: {JSON.stringify(this.state.unfilteredArray)} </span>
        <input className="inputLint" onChange={ e => this.getInput( e.target.value )}></input>
        <button className="confirmationButton" onClick={ () => this.filter(this.state.userInput) }>Filter</button>
        <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>

      </div>
    );
  }
}

export default FilterObject;
