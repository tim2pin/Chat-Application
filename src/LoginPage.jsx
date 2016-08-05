import React, { Component } from 'react';
import LoginForm from './LoginForm.jsx';
import globalStyles from './assets/styles/global.css';

var headerStyle = {
  background: 'url(http://www.freewebheaders.com/wordpress/wp-content/gallery/grass/green-striped-grass-soccer-football-field-background-header.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover', 
  textAlign: 'center',
  height: '170px', 
  marginBottom: '100px',
  fontSize: '75px',
  paddingTop: '50px',
  color: 'white',
  textShadow: "-1.5px 0 black, 0 1.5px black, 6.5px 0 black, 0 -1.5px black",
  fontFamily: 'Racing Sans One', 
}

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <h1 style={headerStyle}>NFL Smack Talk </h1>
        <LoginForm />
      </div>
    );
  }
}
