import React from 'react';
// import denverData from './denverData';
import Search from './Search'

export default function Current(props) {
  return (
    <div className="current-div">
      { props.condition &&
          <div className = 'current-container'>
            <p className='current-location'>
              {props.location}
            </p>
            <p className="current-zip">
              {props.zip}
            </p>
            <p className="current-temp">
              {props.temp}°F
            </p>
            <p className="current-icon-condition">
              <img src={props.iconUrl}/>
            </p>
            <p className="current-condition">
              {props.condition}
            </p>
            <p className="current-hi-lo">
              Hi: <span className="hi">{props.high}°F</span>
              Lo: <span className="low">{props.low}°F</span>
            </p>
            <p className="current-string">
              {props.forecastString}
            </p>
            <Search retrieveData = {props.retrieveData}
              returnLocation = {props.returnLocation}/>
            <p className="current-string">
              {props.lastUpdated}
            </p>
          </div>
        }
    </div>
  );
}
