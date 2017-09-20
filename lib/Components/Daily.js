import React from 'react';
import Card from './Card';

export default function Daily(props) {
  return (
    <table className="daily-div">
      {
        props.dailyData &&
        props.dailyData.map((day) => {
          return (
            <tbody key={setTimeout(Date.now(), 1000)}>
              <tr>
                <td className="table-day">{day.date.weekday}</td>
                <td className="table-date">{day.date.monthname_short}{day.date.day}</td>
                <td className="table-icon"><img src={day.icon_url} /></td>
                <td className="table-hi">Hi: <span className="hi">{day.high.fahrenheit}</span>°F</td>
                <td className="table-low">Lo: <span className="low">{day.low.fahrenheit}</span>°F</td>
              </tr>
            </tbody>
          );
        })
      }
    </table>
  );
}
