import React from 'react';
import denverData from './denverData';
import Search from './Search'

export default function Current (props) {
  return (
    <div className="current-div">
      { props.location &&
          <div className = 'current-container'>
            <Search />
            <span>
              Location: {props.location}
            </span>
            <br/>
            <span>
              Zip: {props.zip}
            </span>
            <br/>
            <span>
              Current Temp: {props.temp}
            </span>
            <br/>
            <span>
              Current Conditions: {props.condition}
            </span>
            <br/>
            <span>
              icon: {props.iconText}
            </span>
            <br/>
            <span>
              {props.lastUpdated}
            </span>
          </div>
        }
    </div>
  );
}
