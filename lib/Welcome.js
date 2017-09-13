import React from 'react';
import Search from './Search'

export default function Welcome(props) {
  return (
    <div className = 'welcome-container'>
      <h1>Welcome To Weatherly!</h1>
      <p>Let Us Explore!</p>
      <Search retrieveData={props.retrieveData}/>
      <p>Type in a city (sorry, no magical kingdoms)<br/> to see the current weather</p>
    </div>
  )
}
