import React from 'react';

export default function Card(props) {
  return (
    <section className = 'card'>
      { props.hour &&
        <div>
          {props.hour}
          <br/>
          T: {props.hourlyTemp}
          <img src={props.icon} />
          {props.condition}
        </div>
      }
      {
        props.day &&
        <div>
          {props.day.date.weekday_short}
          <img src={props.day.icon_url} />
          <span className="hi">{props.day.high.fahrenheit}</span>
          <span className="low">{props.day.low.fahrenheit}</span>
        </div>
      }
    </section>
  );
}
