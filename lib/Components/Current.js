import React from 'react';
// import denverData from './denverData';
import Search from './Search'

export default class Current extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="current-div">
        { this.props.condition &&
            <div className = 'current-container'>
              <span>
                <img className="weth-img"  src={this.props.iconUrl}/>
              </span>
              <br/>
              <span>
                {this.props.condition}
              </span>
              <br/>
              <span className = 'city-location'>
                {this.props.location} {this.props.zip}
              </span>
              <br/>
              <span>
                Current Temp: {this.props.temp} F
              </span>
              <br/>
              <span>
                Hi: <span className="hi">{this.props.high}</span>
                Lo: <span className="low">{this.props.low}</span>
              </span>
              <br/>
              <Search
                retrieveData = {this.props.retrieveData}
                returnLocation = {this.props.returnLocation}/>
              <span>
                {this.props.lastUpdated}
              </span>
            </div>
          }
      </div>
    );
  }
}
