import React from 'react';
// import denverData from './denverData';
import Card from './Card';

export default class Hourly extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="hourly-container">
        {this.props.hourlyData &&
          this.props.hourlyData.map((hour) => {
            return (<Card hourlyTemp={hour.temp.english}
              hour={hour.FCTTIME.civil}
              icon={hour.icon_url}
              condition={hour.condition}
              key={setTimeout(Date.now(), 1000)}/>)
          })
        }
      </div>
    )
  }
}
