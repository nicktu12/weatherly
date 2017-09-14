import React from 'react';
import Welcome from './Welcome';
import Current from './Current';
import Hourly from './Hourly';
import Search from './Search';
import Key from './keys';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.retrieveData = this.retrieveData.bind(this);
  }

  retrieveData() {
    let myApiKey = Key();

    fetch(`http://api.wunderground.com/api/${myApiKey}/geolookup/conditions/hourly/forecast10day/q/CO/Denver.json`)
      .then(data => data.json())
      .then(data => this.setState({
        location: data.current_observation.display_location.city,
        fullLocal: data.current_observation.display_location.full,
        temp: data.current_observation.temp_f,
        zip: data.current_observation.display_location.zip,
        condition: data.current_observation.weather,
        high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
        low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
        day: data.forecast.simpleforecast.forecastday,
        hourly: data.hourly_forecast,
        iconText: data.current_observation.icon,
        lastUpdated: data.current_observation.observation_time
      }))
      .catch(error => console.log('Whoops!', error))
  }

  render() {
    return (
      <div className = 'App'>
        <Welcome retrieveData={this.retrieveData}/>
        <Current location={this.state.fullLocal}
          zip={this.state.zip}
          temp={this.state.temp}
          condition={this.state.condition}
          iconText={this.state.iconText}
          lastUpdated={this.state.lastUpdated}/>
        <Hourly firstHour={this.state.hourly}
          // secondHour={}
          // thirdHour={}
          // fourthHour={}
          // fifthHour={}
          // sixthHour={}
          // seventhHour={}
        />
      </div>
    )
  }
}
