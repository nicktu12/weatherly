import React from 'react';
import Card from './Card';

export default function Daily(props) {
  return (
    <div className="daily-div">
      {
        props.dailyData &&
        props.dailyData.map((day)=>{
          return (<Card day={day}/>)
        })
      }
    </div>
  );
}
