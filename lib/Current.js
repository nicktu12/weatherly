import React from 'react';
import denverData from './denverData'

export default class Current extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className = 'currentContainer'>
        <span>
          This city: {denverData.current_observation.display_location.city}
        </span>
        <br/>
        <span>
          State: {denverData.current_observation.display_location.state}
        </span>
        <br/>
        <span>
          Zip: {denverData.current_observation.display_location.zip}
        </span>
        <br/>
        <span>
          Date: {denverData.current_observation.observation_time}
        </span>
        <br/>
        <span>
          Current Temp: {denverData.current_observation.temperature_string}
        </span>
        <br/>
        <span>
          Current Conditions: {denverData.current_observation.weather}
        </span>
        <br/>
        <span>
          Current Icon: <img src={denverData.current_observation.icon_url}/>
        </span>
      </div>


    )
  }
}
