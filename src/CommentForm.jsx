import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import elementalStyles from '../node_modules/elemental/less/elemental.less';
import { Button, Alert, Spinner, Row, Col, Form, FormField, FormInput, FormSelect, Glyph } from 'elemental';

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      enteredComment: "",
      subject: "",
      enteredSubject:"",
    }

    console.log(hi ,this.state.comment);
    console.log(this.state.enteredComment);
    console.log(this.state.subject);
    console.log(this.state.enteredSubject);

  }
  handleCommentSubmit(e) {
    e.preventDefault();
    this.props.onNewComment.bind(this)(this.state.enteredComment, this.state.enteredSubject);
  }
  handleCommentChange(e) {
    this.setState({enteredComment: e.target.value});
  }
  handleSubjectChange(e) {
    this.setState({enteredSubject: e.target.value});
  }

  render() {
    return (
      
        <div style={{marginBottom: '50px'}}>

          <div style={{
            border: '1px solid #dedede',
            width:'40%', 
            margin:'0 auto', 
            padding:'20px',
            paddingRight:'0px',
            paddingBottom: '30px', 
            marginBottom:'95px',
            boxShadow: '5px 5px 5px 5px #888888',
            background: '#f1f1f4',
          }}>
                  <span style={{fontSize: '20px',}}><strong>{this.props.username.toUpperCase()} | {this.props.team.toUpperCase()} </strong> </span> 

          <Form onSubmit={this.handleCommentSubmit.bind(this)} style={{width:'80%', margin:'0 auto',padding:'20px',}}>
            
            <FormInput style={{marginBottom:'10px',}} placeholder="Subject" onChange={this.handleSubjectChange.bind(this)}  />
            <FormInput placeholder="Talk Some Smack..." multiline onChange={this.handleCommentChange.bind(this)} />
            
            <FormField offsetAbsentLabel>
            <Button style={{float:'right', marginTop: '10px',fontFamily:'Racing Sans One',boxShadow: '0.25px 0.25px 0.25px 0.25px #888888',}} size="xs" submit onSubmit={this.handleCommentSubmit.bind(this)}><Glyph icon="megaphone" /> Talk Smack!</Button>
            </FormField>

          </Form>
          </div>
        </div>
    
    );
  }
}
