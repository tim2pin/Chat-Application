import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import {Row, Col, Button, Glyph} from 'elemental';

export default class Comment extends Component {


// getInitialState() {
//     counter:0
// }

// increment() {
//   this.setState({ counter: this.state.counter+1});
// }
  render() {
    return (
      <div style={{
        borderBottom: '2px solid #dedede',
        marginBottom: '40px'
      }}>
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
                <strong>Subject</strong><br />
                {this.props.subject}
              </Col>
            </Row>
            <Row>
              <Col>
                <strong>Comment</strong><br />
                {this.props.comment}
              </Col>
            </Row>
            <Row>
              <Col style={{marginBottom: '20px'}}>
                <hr />
                {/*<div>{this.state.counter}</div>*/}
                <Button /*onClick={this.increment}*/ style={{width:'75px', marginRight:'5px'}} type="success" size="sm"><Glyph icon="thumbsup" /></Button>
                <Button style={{width:'75px',}} type="danger" size="sm"><Glyph icon="thumbsdown" /></Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
