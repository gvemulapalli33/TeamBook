import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff
    }
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Yearbook</h1>
      </header>
        YOUR CODE GOES HERE
      </div>
    );
  }
}

export default App;