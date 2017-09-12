import React from 'react';
import './Welcome.css'


export default function Welcome() {
  return (
    <div className = 'appContainer'>
      <h1>Welcome To Weatherly!</h1>
      <p>Let Us Explore!</p>
      <input type = 'text' placeholder = 'Search'>
      </input>
      <br/>
      <br/>
      <button type = 'submit'>Submit</button>
      <br/>
      <br/>
      <div>Current Temperature 76</div>
      <br/>
      <br/>
      <div>Hourly Temperature</div>
      <br/>
      <br/>
      <div>10 Day Forcast</div>
    </div>
  )
}
