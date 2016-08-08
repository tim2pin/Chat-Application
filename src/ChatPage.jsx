import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import CommentForm from './CommentForm.jsx';
import CommentList from './CommentList.jsx';
import elementalStyles from '../node_modules/elemental/less/elemental.less';
import Horizon from '@horizon/client';
import {chat} from './stores.jsx';


var headerStyle = {
  background: 'url(http://www.freewebheaders.com/wordpress/wp-content/gallery/grass/green-striped-grass-soccer-football-field-background-header.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  boxShadow: '7px 7px 3.5px #888888', 
  textAlign: 'center',
  height: '200px', 
  marginBottom: '100px',
  fontSize: '70px',
  paddingTop: '30px',
  color: 'white',
  textShadow: "-2.0px 0 black, 0 2.2px black, 6.5px 0 black, 0 -1.5px black",
  fontFamily: 'Racing Sans One', 
}



export default class ChatPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    }
    chat.watch().subscribe((results) => {
      this.setState({
        comments: results,
      })
    })
  }

  handleNewComment(comment, subject) {
    chat.store({
      comment: comment, 
      username: this.props.params.username, 
      subject: subject, 
      team: this.props.params.team 
    })

    //console.log("comment:", comment, this);
    //var newCommentArray = Array.prototype.slice.call(this.state.commentArray);
    // newCommentArray.push({comment: comment, username: this.props.params.username, subject: subject, team: this.props.params.team });
    // this.setState({commentArray: newCommentArray});
  }

  render() {
    return (
      <div>
        <h1 style={headerStyle}>Welcome to <img style={{height:'150px', width:'130px',}} src="http://vignette3.wikia.nocookie.net/looneytunes/images/4/49/NFL-logo.png/revision/latest?cb=20140711021414" /> Smack Talk</h1>
        <CommentForm username={this.props.params.username} team={this.props.params.team} onNewComment={this.handleNewComment.bind(this)} />
        <h1 style={{borderBottom:'1.5px solid #dedede', textAlign: 'center', marginTop: '50px',marginBottom:'75px',fontFamily:'Racing Sans One',}}>Smack Board:</h1>
        <CommentList username={this.props.params.username} team={this.props.params.team} comments={this.state.comments} />
      </div>
    );
  }
}
