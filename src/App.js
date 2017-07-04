import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputText from './forms/input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="logo" alt="logo" />
          <h2>Pastanaga UI</h2>
        </div>
        <h2 className="App-intro">
          Forms
        </h2>
        <h3>InputText</h3>
        <InputText />
      </div>
    );
  }
}

export default App;
