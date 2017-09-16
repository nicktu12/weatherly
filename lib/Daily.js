import React from 'react';
import Card from './Card'

export default function Daily(props) {
  return (
    <div className="daily-div">
      {
        props.dailyData &&
        <div className="daily-container">
          <Card data={props.dailyData}/>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      }
    </div>
  );
}
