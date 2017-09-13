import React from 'react';
import './Styles.scss'


export default function Welcome() {
  return (
    <div className = 'welcome-container'>
      <h1>Welcome To Weatherly!</h1>
      <p>Let Us Explore!</p>
      <input type = 'text' placeholder = 'Search'></input>
      <button type = 'submit'>Press Start</button>
      <p>Type in a city (sorry, no magical kingdoms)<br/> to see the current weather</p>
    </div>
  )
}
