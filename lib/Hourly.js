import React from 'react';
import denverData from './denverData';
import Card from './Card';
// import './Hourly.css';

export default class Hourly extends React.Component {
  constructor() {
    super();
  }

  render (props) {
    return (
      <div className = 'hourlyContainer'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}
