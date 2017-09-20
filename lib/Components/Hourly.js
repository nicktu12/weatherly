import React from 'react';
import Card from './Card';

export default function Hourly(props) {
  return (
    <div className="hourly-div">
      {props.hourlyData &&
        props.hourlyData.map((hour) => {
          return (<Card hourlyTemp={hour.temp.english}
            hour={hour.FCTTIME.civil}
            icon={hour.icon_url}
            condition={hour.condition}
            key={setTimeout(Date.now(), 1000)}/>);
        })
      }
    </div>
  );
}
