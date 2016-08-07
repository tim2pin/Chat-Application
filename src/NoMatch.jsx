import React, { Component } from 'react';


export default class NoMatch extends Component {
  render() {
    return (
      <div style={{width:'100%',}}>
        <img style={{width: '100%', height:'550px',}} src="http://www.empiresports.co/wp-content/uploads/2014/05/empire-sports-NFL-referee-throwing-flag-no-touch-quarterback-qb.jpg" alt="oh no!" />
        <div style={{fontSize:'40px',fontFamily:'Racing Sans One',textAlign:'center',}}>Illegal Manuever...<a href="/">Repeat, First Down.</a></div>
      </div>
    );
  }
}
