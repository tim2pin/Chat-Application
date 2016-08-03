import React, { Component } from 'react';
import LoginForm from './LoginForm.jsx';

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign:'center'}}>Login Page </h1>
        <LoginForm />
      </div>
    );
  }
}
