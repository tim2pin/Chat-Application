import React, { Component } from 'react';


export default class NoMatch extends Component {
  render() {
    return (
      <div>
        <img src="http://www.empiresports.co/wp-content/uploads/2014/05/empire-sports-NFL-referee-throwing-flag-no-touch-quarterback-qb.jpg" alt="oh no!" />
        <div style={{fontSize:'50px',}}>Illegal Manuever, 5 yard penalty,<a href="/">Repeat, First Down.</a></div>
      </div>
    );
  }
}
