import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link } from 'react-router-dom'
import Login from './Login';
import Home from './Home';
import Documentation from './Documentation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="container">
            <img src={logo} className="logo" alt="logo" />
            <h2>Pastanaga <strong>UI</strong></h2>
            <header>
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/documentation">Documentation</Link>
            </header>
          </div>
        </div>
        <main className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/documentation" component={Documentation} />
        </main>
      </div>
    );
  }
}

export default App;
