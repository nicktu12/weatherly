import React from 'react';

export default function Simplfied(props) {
  return (
    <div className="simple-div">
      <div className="simple-current">
        <p>Location: {props.location}</p>
        <p>{props.zip}</p>
        <p>Current Temp: {props.temp}</p>
        <p>Hi: {props.high}, Lo: {props.low}</p>
        <p>{props.condition}</p>
      </div>
      <div className="simple-hourly">
        <p>Hourly Forecast</p>
        {
          props.hourlyData &&
          props.hourlyData.map((hour)=>{
            return (
              <div key={setTimeout(Date.now(), 1000)}>
                {hour.FCTTIME.civil}
                {hour.temp.english}
                {hour.condition}
              </div>
            )
          })
        }
      </div>
      <div>
        <p>Daily Forecast</p>
        {
          props.dailyData &&
          props.dailyData.map((day)=>{
            return(
              <div key={setTimeout(Date.now(), 1000)}>
                <p>
                  {day.date.weekday_short}
                  Hi: {day.high.fahrenheit}
                  Lo: {day.low.fahrenheit}
                </p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
