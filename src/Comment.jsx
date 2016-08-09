import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import {Row, Col, Button, Glyph} from 'elemental';
import {chat} from './stores.jsx'; // references to databases

import CommentList from './CommentList';
//var Count = require('react-count');




export default class Comment extends Component {

handleDelete() {
  chat.fetch().subscribe( function(allMessages) {
      chat.remove(allMessages)
    })
}

  render() {
    return (
      <div style={{borderBottom: '2px solid #dedede',marginBottom: '40px'}}>
        <Row>
          {/*<Col sm="1/3">
            <div style={{
              maxWidth: 200,
              height: 200,
              backgroundColor: '#dedede'
            }}>
              Image here
            </div>
          </Col> */}
          <Col style={{margin:'0 auto'}} sm="1/3">
            <Row>
              <Col>
                <h2 ><strong> {this.props.username}</strong></h2>
                    <Glyph icon="jersey" />
                   {this.props.team}
                <hr />
              </Col>
            </Row>
            <Row>
              <Col>
                <strong><u>Subject</u></strong><br />
                {this.props.subject}
              </Col>
            </Row>
            <Row>
              <Col>
                <strong><u>Comment</u></strong><br />
                {this.props.comment}
              </Col>
            </Row>
            <Row>
              <Col style={{marginBottom: '20px'}}>
                <hr />
                <Button style={{width:'75px', marginRight:'3px', }} type="success" size="sm"><Glyph icon="thumbsup" /></Button>
                <Button style={{width:'75px', marginRight:'3px',}} type="danger" size="sm"><Glyph icon="thumbsdown" /></Button>
                <Button onClick={this.handleDelete.bind(this)} style={{width:'40px', float: 'right',}} type="warning" size="sm"><Glyph icon="trashcan" /></Button>

              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
