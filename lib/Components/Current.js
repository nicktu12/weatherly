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
        { this.props.location &&
            <div className = 'current-container'>
              <Search />
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
                icon: {this.props.iconText}
              </span>
              <br/>
              <span>
                {this.props.lastUpdated}
              </span>
            </div>
          }
      </div>
    );
  }
}
