
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import LoginPage from './LoginPage.jsx';
import ChatPage from './ChatPage.jsx';
import CommentForm from './CommentForm.jsx'
import CommentList from './CommentList.jsx';
import NoMatch from './NoMatch.jsx';
import globalStyles from './assets/styles/global.css';

/**
 * A stateful component to store our app
 */
export default class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign:'center', marginTop:'5%', marginBottom: '100px',}}>Welcome to NFL Smack Talk</h1>
          <div>
          {this.props.children}
          </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={LoginPage} />
    </Route>
    <Route path="chat" component={ChatPage} />

    
  

    <Route path="*" component={NoMatch} />
  </Router>,
  document.getElementById('root')
);
