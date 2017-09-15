import React from 'react';
import Search from './Search';
import Styles from './Styles'

export default class Welcome extends React.Component {
  constructor() {
    super();

    this.state = {
      display: true,
      className: '',
    };
  }

  updateDisplay() {
    this.setState({
      className: this.props.displayWelcome ? 'enable' : 'disable',
    });
  }

  render() {
    return (

      <div className = 'welcome-container'>
        {
          this.props.displayWelcome &&
          <div>
            <h1>Welcome To Weatherly!</h1>
            <p>Let Us Explore!</p>
            <Search
              retrieveData = {this.props.retrieveData}
              handleButtonClick = {this.updateDisplay.bind(this)} />
            <p>Type in a city (sorry, no magical kingdoms)
              <br/> to see the current weather
            </p>
          </div>
        }
      </div>

    );
  }
}
