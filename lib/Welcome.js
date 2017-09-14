import React from 'react';
import Search from './Search';

export default class Welcome extends React.Component {
  constructor() {
    super();

    this.state = {
      display: true,
    };
  }

  updateDisplay() {
    console.log('hello');
    this.setState({ display: false });
  }

  render() {
    return (

      <div className = 'welcome-container'>
        <h1>Welcome To Weatherly!</h1>
        <p>Let Us Explore!</p>
        <Search
          retrieveData = {this.props.retrieveData}
          handleButtonClick = {this.updateDisplay.bind(this)} />
        <p>Type in a city (sorry, no magical kingdoms)<br/> to see the current weather</p>
      </div>

    );
  }
}
