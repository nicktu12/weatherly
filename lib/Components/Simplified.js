import React from 'react';

export default function Simplfied(props) {
  return (
    <div className="simple-div">
      <table className="simple-current">
        <tbody>Location: {props.location}<span className="simple-zip">{props.zip}</span></tbody>
        <tr>Current Temp: {props.temp}</tr>
        <tr>Hi: <span className="hi">{props.high}</span>°F, Lo: <span className="lo">{props.low}</span>°F</tr>
        <tr>{props.condition}</tr>
      </table>
      <table className="simple-hourly">
        <tbody>Hourly</tbody>
        {
          props.hourlyData &&
          props.hourlyData.map((hour)=>{
            return (
              <tr key={setTimeout(Date.now(), 1000)}>
                <td className="simple-hour">{hour.FCTTIME.civil}</td>
                <td className="simple-hour-temp">{hour.temp.english}°F</td>
                <td>{hour.condition}</td>
              </tr>
            )
          })
        }
      </table>
      <table className="simple-daily">
        <tbody>Daily</tbody>
        {
          props.dailyData &&
          props.dailyData.map((day)=>{
            return(
              <tr key={setTimeout(Date.now(), 1000)}>
                <td className="simple-day">{day.date.weekday_short}</td>
                <td className="simple-day-hi">Hi: <span className="hi">{day.high.fahrenheit}</span></td>
                <td className="simple-day-lo">Lo: <span className="lo">{day.low.fahrenheit}</span></td>
                <td>{day.conditions}</td>
              </tr>
            )
          })
        }
      </table>
      <p className="simple-last">{props.lastUpdated}</p>
    </div>
  );
}
