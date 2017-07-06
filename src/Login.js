import React, { Component } from 'react';
import InputText from './forms/input';

class Login extends Component {
  render() {
    return (
      <div className="App">
        <InputText id="username" />
        <InputText id="password" />
        <button>Login</button>
      </div>
    );
  }
}

export default Login;
