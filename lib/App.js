import React from 'react';
import Welcome from './Welcome';
import Current from './Current';
import Hourly from './Hourly';

export default function App() {
  return (
    <div className = 'App'>
      <Welcome />
      <Current />
      <Hourly />
    </div>
  )
}
