import React, { Component } from 'react';
import CommentForm from './CommentForm.jsx';
import CommentList from './CommentList.jsx';

export default class ChatPage extends Component {
  render() {
    return (
      <div>
        <div style={{height:'200px',}}>HEAAAAAAAAAAAAAAAADER </div>
        <CommentForm />
        <CommentList />
      </div>
    );
  }
}
