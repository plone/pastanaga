import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Login from './Login';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="logo" alt="logo" />
          <h2>Pastanaga UI</h2>
        </div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </main>
      </div>
    );
  }
}

export default App;
