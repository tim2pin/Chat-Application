import React, { Component } from 'react';

import {Row, Col, Button} from 'elemental';

export default class Comment extends Component {
  render() {
    return (
      <div style={{
        borderBottom: '2px solid #dedede',
        marginBottom: '20px'
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
                <h2>Username</h2>
                Favorite Team
                <hr />
              </Col>
            </Row>
            <Row>
              <Col>
                <strong>Comment</strong><br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Col>
            </Row>
            <Row>
              <Col style={{marginBottom: '20px'}}>
                <hr />
                <Button type="hollow-success" size="sm">Cheer</Button>
                <Button type="hollow-danger" size="sm">Jeer</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
