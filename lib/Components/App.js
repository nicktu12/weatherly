import React from 'react';
import Welcome from './Welcome';
import Current from './Current';
import Hourly from './Hourly';
import Daily from './Daily'
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
      forecastString: '',
      displayWelcome: true,
      weatherData: [],
    };

    this.retrieveData = this.retrieveData.bind(this);
    this.returnLocation = this.returnLocation.bind(this);
  }

  retrieveData() {
    let location = this.parseLocation();
    let myApiKey = Key();

    fetch(`http://api.wunderground.com/api/${myApiKey}/geolookup/conditions/hourly/forecast10day/q/${location[1]}/${location[0]}.json`)
      .then(data => data.json())
      .then(data => this.setState({
        location: data.current_observation.display_location.city,
        fullLocal: data.current_observation.display_location.full,
        temp: data.current_observation.temp_f,
        zip: data.current_observation.display_location.zip,
        condition: data.current_observation.weather,
        high: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
        low: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
        day: this.returnNewArray(data.forecast.simpleforecast.forecastday, 1, 10),
        hourly: this.returnNewArray(data.hourly_forecast, 0, 7),
        iconText: data.current_observation.icon,
        iconUrl: data.current_observation.icon_url,
        lastUpdated: data.current_observation.observation_time,
        forecastString: data.forecast.txt_forecast.forecastday[0].fcttext,
        displayWelcome: false,
      }))
      .catch((error) =>
      {console.log('Whoops!', error);
        alert('Please enter a valid city and state')})
  }

  returnNewArray(array, start, end) {
    return array.splice(start, end);
  }

  returnLocation(string) {
    this.setState(
      { fullLocal: string.value }
    );
    localStorage.setItem('fullLocal', string.value);
  }

  componentWillMount(){
    if (localStorage.fullLocal) {
      this.state.fullLocal = localStorage.fullLocal;
      this.retrieveData();
    }
  }



  parseLocation(){
    return this.state.fullLocal.split(', ');
  }

  render() {
    return (
      <div className = 'App'>
        { this.state.displayWelcome &&
          <Welcome
            retrieveData = {this.retrieveData}
            displayWelcome = {this.state.displayWelcome}
            returnLocation={this.returnLocation}
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
            lastUpdated={this.state.lastUpdated}
            retrieveData = {this.retrieveData}
            returnLocation={this.returnLocation}
            forecastString={this.state.forecastString}/>
          <Hourly
            hourlyData = {this.state.hourly} />
          <Daily
            dailyData = {this.state.day} />
          <Simplified location={this.state.fullLocal}
            zip={this.state.zip}
            temp={this.state.temp}
            high={this.state.high}
            low={this.state.low}
            condition={this.state.condition}
            lastUpdated={this.state.lastUpdated}
            hourlyData={this.state.hourly}
            dailyData = {this.state.day}
            lastUpdated={this.state.lastUpdated}/>
        </div>
      </div>
    );
  }
}
