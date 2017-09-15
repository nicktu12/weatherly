import React from 'react';

export default function Card(props) {
  return (
    <section className = 'hourlyCard1'>
      <img className = 'hourlyIcon' src = 'assets/001-bomb.svg'/>
      <p> Temperature: {props.hours}</p>
    </section>
  );
}
