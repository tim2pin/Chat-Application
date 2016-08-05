import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import elementalStyles from '../node_modules/elemental/less/elemental.less';
import { Button, Alert, Spinner, Row, Col, Form, FormField, FormInput, FormSelect } from 'elemental';

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      enteredComment: "",
      subject: "",
      enteredSubject:"",
    }
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

          <div style={{border: '1px solid #dedede', width:'40%', margin:'0 auto', padding:'10px', marginBottom:'95px'}}>
                  <span style={{fontSize: '25px',}}>{this.props.username} | {this.props.team} </span> 

          <Form onSubmit={this.handleCommentSubmit.bind(this)} style={{width:'90%', margin:'0 auto', backgroundColor:'white', padding:'30px',}}>
            
            <FormInput style={{marginBottom:'10px',}} placeholder="Subject" onChange={this.handleSubjectChange.bind(this)}  />
            <FormInput placeholder="Talk Some Smack..." multiline onChange={this.handleCommentChange.bind(this)} />
            
            <FormField offsetAbsentLabel>
            <Button style={{float:'right', marginTop: '10px',fontFamily:'Racing Sans One',}} size="xs" submit onSubmit={this.handleCommentSubmit.bind(this)} >Post Smack Talk</Button>
            </FormField>

          </Form>
          </div>
        </div>
    
    );
  }
}
