import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Comment from './Comment.jsx';
import Chatpage from './ChatPage.jsx'

export default class CommentList extends Component {
  render() {
    console.log("commentlist", this.props.commentArray);
    return (
      <div>
        <h1 style={{textAlign: 'center', marginTop: '50px',marginBottom:'75px',fontFamily:'Racing Sans One',}}><u>Smack Board:</u></h1>
        {this.props.commentArray.map((item) => {
          return (
            <Comment username={item.username} team={item.team} comment={item.comment} subject={item.subject} />
            )})}
      </div>
    );
  }
}
