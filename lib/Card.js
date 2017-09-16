import React from 'react';

export default function Card(props) {
  return (
    <section className = 'card'>
      <img className = 'hourlyIcon' src = 'assets/001-bomb.svg'/>
      T: {props.hours}
    </section>
  );
}
