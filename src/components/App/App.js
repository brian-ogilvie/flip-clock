import React, { Component } from 'react';
import './App.css';

import Clock from '../Clock/Clock'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Flip Clock</h1>
        <Clock />
      </div>
    );
  }
}

export default App;
