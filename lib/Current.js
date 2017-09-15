import React from 'react';
import denverData from './denverData';

export default class Current extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className = 'currentContainer'>
        <span>
          Location: {this.props.location}
        </span>
        <br/>
        <span>
          Zip: {this.props.zip}
        </span>
        <br/>
        <span>
          Current Temp: {this.props.temp}
        </span>
        <br/>
        <span>
          Current Conditions: {this.props.condition}
        </span>
        <br/>
        <span>
          {/* Current Icon: <img src="https://isaactv.files.wordpress.com/2013/04/angrysun-large1.gif" height="50px"/> */}
          icon: {this.props.iconText}
        </span>
        <br/>
        <span>
          {this.props.lastUpdated}
        </span>
      </div>


    )
  }
}
