import React from 'react';
import Welcome from './Welcome';
import Current from './Current';
import Hourly from './Hourly';
import Search from './Search';
import Key from './keys';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.retrieveData = this.retrieveData.bind(this);
  }

  retrieveData() {
    const myApiKey = Key();

    fetch(`http://api.wunderground.com/api/${myApiKey}/forecast/geolookup/conditions/q/CO/Denver.json`)
      .then(data => data.json())
      .then(dataParsed => this.setState({dataParsed}))
      .catch(error => console.log('Whoops!', error))
  }

  render() {
    return (
      <div className = 'App'>
        <Welcome retrieveData={this.retrieveData}/>
        <Current />
        <Hourly />
      </div>
    )
  }
}
