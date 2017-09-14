import React from 'react';
import denverData from './denverData';
import Card from './Card';

export default class Hourly extends React.Component {
  constructor() {
    super();
    // console.log(this.props.hourlyData)
  }

  returnNewArray() {
    return this.props.hourlyData.splice(0, 6);
  }

  render() {

    return (
      <div className = 'hourlyContainer'>
        {this.props.hourlyData}
      </div>
    );
  }
}

// { this.props.hourlyData &&
//   this.returnNewArray().map((hour) => {
//     return (<Card />);
//   })
// }
