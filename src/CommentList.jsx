import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Comment from './Comment.jsx';

export default class CommentList extends Component {  
  render() {
    console.log("commentlist", this.props.comments);
    return (
      <div>
        {this.props.comments.map((item) => {
          return (
            <Comment id={item.id} username={item.username} team={item.team} comment={item.comment} subject={item.subject} />
            )})}
      </div>
    );
  }
}
