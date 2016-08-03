
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import LoginPage from './LoginPage.jsx';
// import ChatPage from './ChatPage.jsx';
import CommentForm from './CommentForm.jsx'
import CommentList from './CommentList.jsx';
import NoMatch from './NoMatch.jsx';
import globalStyles from './assets/styles/global.css';

var headerStyle = {
  background: 'url(http://www.freewebheaders.com/wordpress/wp-content/gallery/grass/green-striped-grass-soccer-football-field-background-header.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover', 
  textAlign: 'center',
  height: '300px', 
  marginBottom: '100px',
  fontSize: '75px',
  paddingTop: '100px',
  color: 'white',
  textShadow: "-1.5px 0 black, 0 1.5px black, 6.5px 0 black, 0 -1.5px black", 
}




 class App extends Component {
  render() {
    return (
      <div>
        <h1 style={headerStyle}>Welcome to NFL Smack Talk</h1>
        <CommentForm />
        <CommentList />
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>

    <Route path="/" component={LoginPage} />
    <Route path="chat" component={App} />
    <Route path="*" component={NoMatch} />

  </Router>,
  document.getElementById('root')
);
