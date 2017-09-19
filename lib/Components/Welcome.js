import React from 'react';
import Search from './Search';
// import Styles from '../Styles/Styles';

export default function Welcome(props) {
  return (
    <div className = 'welcome-container'>
      {
        props.displayWelcome &&
        <div>
          <h1>Welcome To Weatherly!</h1>
          <p>Let Us Explore!</p>
          <div className="welcome-search">
            <Search
              retrieveData = {props.retrieveData}
              returnLocation = {props.returnLocation}
            />
          </div>
          <p>Type in a city (sorry, no magical kingdoms)
            <br/> to see the current weather
          </p>
        </div>
      }
    </div>
  );
}
