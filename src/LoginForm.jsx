import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import elementalStyles from '../node_modules/elemental/less/elemental.less';

import { Button, Alert, Spinner, Row, Col, Form, FormField, FormInput, FormSelect } from 'elemental';

  var teamOptions = [
    {
      label: 'Arizona Cardinals',
      value: 'Arizona Cardinals'
    },
    {
      label: 'Atlanta Falcons',
      value: 'Atlanta Falcons'
    },
    {
      label: 'Baltimore Ravens',
      value: 'Baltimore Ravens'
    },
    {
      label: 'Buffalo Bills',
      value: 'Buffalo Bills'
    },
    {
      label: 'Carolina Panthers',
      value: 'Carolina Panthers'
    },
    {
      label: 'Chicago Bears',
      value: 'Chicago Bears'
    },
    {
      label: 'Cincinnati Bengals',
      value: 'Cincinnati Bengals'
    },
    {
      label: 'Cleveland Browns',
      value: 'Cleveland Browns'
    },
    {
      label: 'Dallas Cowboys',
      value: 'Dallas Cowboys'
    },
    {
      label: 'Denver Broncos',
      value: 'Denver Broncos'
    },
    {
      label: 'Detroit Lions',
      value: 'Detroit Lions'
    },
    {
      label: 'Green Bay Packers',
      value: 'Green Bay Packers'
    },
    {
      label: 'Houston Texans',
      value: 'Houston Texans'
    },
    {
      label: 'Indianapolis Colts',
      value: 'Indianapolis Colts'
    },
    {
      label: 'Jacksonville Jaguars',
      value: 'Jacksonville Jaguars'
    },
    {
      label: 'Kansas City Chiefs',
      value: 'Kansas City Chiefs'
    },
    {
      label: 'Miami Dolphins',
      value: 'Miami Dolphins'
    },
    {
      label: 'Minnesota Vikings',
      value: 'Minnesota Vikings'
    },
    {
      label: 'New England Patriots',
      value: 'New England Patriots'
    },
    {
      label: 'New Orleans Saints',
      value: 'New Orleans Saints'
    },
    {
      label: 'New York Giants',
      value: 'New York Giants'
    },
    {
      label: 'New York Jets',
      value: 'New York Jets'
    },
    {
      label: 'Oakland Raiders',
      value: 'Oakland Raiders'
    },
    {
      label: 'Philadelphia Eagles',
      value: 'Philadelphia Eagles'
    },
    {
      label: 'Pittsburgh Steelers',
      value: 'Pittsburgh Steelers'
    },
    {
      label: 'San Diego Chargers',
      value: 'San Diego Chargers'
    },
    {
      label: 'San Francisco 49ers',
      value: 'San Francisco 49ers'
    },
    {
      label: 'Seattle Seahawks',
      value: 'Seattle Seahawks'
    },
    {
      label: 'St. Louis Rams',
      value: 'St. Louis Rams'
    },
    {
      label: 'Tampa Bay Buccaneers',
      value: 'Tampa Bay Buccaneers'
    },
    {
      label: 'Tennessee Titans',
      value: 'Tennessee Titans'
    },
    {
      label: 'Washington Redskins',
      value: 'Washington Redskins'
    },
  ]

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredName:"",
      pickedTeam:"",
    }
    console.log(teamOptions);
  }

  handleInputChange(e) {
    console.log("name entered", e.target.value);
    this.setState({enteredName: e.target.value});
  }

  handleSelect(team) {
    console.log("team picked", team);
    this.setState({pickedTeam: team});
  }

  onLoginSubmit(e) {
    e.preventDefault()
    browserHistory.push('/chat/' + this.state.enteredName + '/' + this.state.pickedTeam )
  }




  render() {
    return (
      <div>
        <h1 style={{textAlign:'center',fontFamily:'Racing Sans One',}}>Login</h1>
        <Form onSubmit={this.onLoginSubmit.bind(this)} style={{width:'40%', margin:'0 auto', background:'#dedede', padding:'10px',}} type="horizontal">

          <FormField label="Username:" htmlFor="horizontal-form-input-username">
          <FormInput onChange={this.handleInputChange.bind(this)} type="text" placeholder="Enter username" name="horizontal-form-input-username" />
          </FormField>

          <FormField label="Favorite Team:" >
          <FormSelect onChange={this.handleSelect.bind(this)}  options={teamOptions} firstOption="Select Favorite Team" />
          </FormField>


          <FormField offsetAbsentLabel>
          <Button style={{float:'right', fontFamily:'Racing Sans One',}} size="sm" submit >Login</Button>
          </FormField>

        </Form>

      </div>
    );
  }
}
