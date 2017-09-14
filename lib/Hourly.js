import React from 'react';
import denverData from './denverData';
// import './Hourly.css';

export default class Hourly extends React.Component {
  constructor() {
    super()
  }

  render (props) {
    return (
      <div className = 'hourlyContainer'>
        <section className = 'hourlyCard1'>
          <img className = 'hourlyIcon' src = 'assets/001-bomb.svg'/>
          <p> Temperature: 76 </p>
          <p> {this.props.firstHour} </p>
        </section>
        <section className = 'hourlyCard1'>
          <img className = 'hourlyIcon' src = 'assets/001-bomb.svg'/>
          <p> Temperature: 76 </p>
          <p> Time: 10:00 AM </p>
        </section>
        <section className = 'hourlyCard1'>
          <img className = 'hourlyIcon' src = 'assets/001-bomb.svg'/>
          <p> Temperature: 76 </p>
          <p> Time: 10:00 AM </p>
        </section>
        <section className = 'hourlyCard1'>
          <img className = 'hourlyIcon' src = 'assets/001-bomb.svg'/>
          <p> Temperature: 76 </p>
          <p> Time: 10:00 AM </p>
        </section>
        <section className = 'hourlyCard1'>
          <img className = 'hourlyIcon' src = 'assets/001-bomb.svg'/>
          <p> Temperature: 76 </p>
          <p> Time: 10:00 AM </p>
        </section>
        <section className = 'hourlyCard1'>
          <img className = 'hourlyIcon' src = 'assets/001-bomb.svg'/>
          <p> Temperature: 76 </p>
          <p> Time: 10:00 AM </p>
        </section>
        <section className = 'hourlyCard1'>
          <img className = 'hourlyIcon' src = 'assets/001-bomb.svg'/>
          <p> Temperature: 76 </p>
          <p> Time: 10:00 AM </p>
        </section>

      </div>
    );
  }
}
