import React from 'react';

export default function Card(props) {
  return (
    <section className = 'card'>
      { props.hour ?
        <div>
          {props.hour}
          <br/>
          T: {props.hourlyTemp}
          <img src={props.icon} />
          {props.condition}
        </div>
        :
        <div>
          hey
        </div>
      }
    </section>
  );
}
