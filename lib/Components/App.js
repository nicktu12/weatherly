import React from 'react';
import Welcome from './Welcome';
import Current from './Current';
import Hourly from './Hourly';
import Daily from './Daily'
// import Search from './Search';
import Simplified from './Simplified';
import Key from '../Utilities/Key';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      location: '',
      fullLocal: '',
      temp: '',
      zip: '',
      condition: '',
      high: '',
      low: '',
      day: '',
      hourly: '',
      iconText: '',
      iconUrl: '',
      lastUpdated: '',
      displayWelcome: true,
      weatherData: [],
    };

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
        day: this.returnNewArray(data.forecast.simpleforecast.forecastday, 9),
        hourly: this.returnNewArray(data.hourly_forecast, 6),
        iconText: data.current_observation.icon,
        iconUrl: data.current_observation.icon_url,
        lastUpdated: data.current_observation.observation_time,
        displayWelcome: false,
      }))
      .catch(error => console.log('Whoops!', error))
  }

  returnNewArray(array, int) {
    return array.splice(0, int);
  }

  render() {
    return (
      <div className = 'App'>
        { this.state.displayWelcome &&
          <Welcome
            retrieveData = {this.retrieveData}
            displayWelcome = {this.state.displayWelcome}
            className = 'disable' />
          }
        <div className="parent-div">
          <Current
            location={this.state.fullLocal}
            zip={this.state.zip}
            temp={this.state.temp}
            high={this.state.high}
            low={this.state.low}
            condition={this.state.condition}
            iconText={this.state.iconText}
            iconUrl={this.state.iconUrl}
            lastUpdated={this.state.lastUpdated} />
            <Hourly
              hourlyData = {this.state.hourly} />
            <Daily
              dailyData = {this.state.day} />
            <Simplified />
        </div>
      </div>
    );
  }
}
