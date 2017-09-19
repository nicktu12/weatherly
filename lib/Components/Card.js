import React from 'react';

export default function Card(props) {
  return (
    <section className = 'card'>
      { props.hour &&
        <div>
          <p className="card-hour">{props.hour}</p>
          <img src={props.icon} />
          <p className="card-condition">{props.condition}</p>
          <p className="card-temp">{props.hourlyTemp}°F</p>
        </div>
      }
    </section>
  );
}
