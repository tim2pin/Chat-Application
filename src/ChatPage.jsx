import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import CommentForm from './CommentForm.jsx';
import CommentList from './CommentList.jsx';
import elementalStyles from '../node_modules/elemental/less/elemental.less';

var headerStyle = {
  background: 'url(http://www.freewebheaders.com/wordpress/wp-content/gallery/grass/green-striped-grass-soccer-football-field-background-header.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover', 
  textAlign: 'center',
  height: '225px', 
  marginBottom: '100px',
  fontSize: '75px',
  paddingTop: '50px',
  color: 'white',
  textShadow: "-1.5px 0 black, 0 1.5px black, 6.5px 0 black, 0 -1.5px black",
  fontFamily: 'Racing Sans One', 
}


export default class ChatPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentArray: [],
    }
  }

  handleNewComment(comment, subject) {
    console.log("comment:", comment, this);
    var newCommentArray = Array.prototype.slice.call(this.state.commentArray);
    newCommentArray.push({comment: comment, username: this.props.params.username, subject: subject, team: this.props.params.team });
    this.setState({commentArray: newCommentArray});
  }

  render() {
    return (
      <div>
        <h1 style={headerStyle}>Welcome to <img style={{height:'150px', width:'150px',}} src="http://vignette3.wikia.nocookie.net/looneytunes/images/4/49/NFL-logo.png/revision/latest?cb=20140711021414" /> Smack Talk</h1>
        <CommentForm username={this.props.params.username} team={this.props.params.team} onNewComment={this.handleNewComment.bind(this)} />
        <CommentList username={this.props.params.username} team={this.props.params.team} commentArray={this.state.commentArray} />
      </div>
    );
  }
}
