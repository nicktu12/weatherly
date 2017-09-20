import React from 'react';
import Search from './Search';

export default function Simplfied(props) {
  return (
    <div>
      {
        props.location &&
        <div className="simple-div">
          <table className="simple-current">
            <tbody>Location: {props.location}<span className="simple-zip">{props.zip}</span></tbody>
            <tr>Current Temp: {props.temp}</tr>
            <tr>Hi: <span className="hi">{props.high}</span>°F, Lo: <span className="lo">{props.low}</span>°F</tr>
            <tr>{props.condition}</tr>
          </table>
          <table className="simple-hourly">
            <tbody>Hourly Forecast</tbody>
            {
              props.hourlyData &&
              props.hourlyData.map((hour) => {
                return (
                  <tr key={setTimeout(Date.now(), 1000)}>
                    <td className="simple-hour">{hour.FCTTIME.civil}</td>
                    <td className="simple-hour-temp">{hour.temp.english}°F</td>
                    <td>{hour.condition}</td>
                  </tr>
                );
              })
            }
          </table>
          <table className="simple-daily">
            <tbody>Daily Forecast</tbody>
            {
              props.dailyData &&
              props.dailyData.map((day) => {
                return (
                  <tr key={setTimeout(Date.now(), 1000)}>
                    <td className="simple-day">{day.date.weekday_short}</td>
                    <td className="simple-day-hi"><span className="hi">{day.high.fahrenheit}°F</span></td>
                    <td className="simple-day-lo"><span className="lo">{day.low.fahrenheit}°F</span></td>
                    <td>{day.conditions}</td>
                  </tr>
                );
              })
            }
          </table>
          <Search retrieveData = {props.retrieveData}
            returnLocation = {props.returnLocation}/>
          <p className="simple-last">{props.lastUpdated}</p>
        </div>
      }
    </div>
  );
}
