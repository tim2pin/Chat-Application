
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import LoginPage from './LoginPage.jsx';
import ChatPage from './ChatPage.jsx';
import NoMatch from './NoMatch.jsx';


//import Horizon from '@horizon/client';


export default class App extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>

    <Route path="/" component={LoginPage} />
    <Route path="chat/:username/:team" component={ChatPage} />
    <Route path="*" component={NoMatch} />

  </Router>,
  document.getElementById('root')
);
