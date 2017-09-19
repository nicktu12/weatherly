import React from 'react';
import Daily from '../lib/Components/Daily';
import { shallow, mount } from 'enzyme';
//

describe ('Daily functionality', () => {

  it('should should be a function', () => {
    expect(typeof(Daily)).toEqual('function');
  });



});
// describe ('Daily functionality', () => {
//
//   const daily = {
//
//   }
//
//
//   it('should exist', () => {
//     expect(wrapper).toBeDefined();
//   });
//
//   // it('should should be a function', () => {
//   //   expect(typeof(Daily)).toEqual('function');
//   // });
//
// });

// beforeEach(() => {
//   wrapper = shallow(<DailyCard
//     highT={day.high.fahrenheit}
//     lowT={day.low.fahrenheit}
//     day={day.date.weekday}
//     img={day.icon_url}
//   />);
// });
//
// it('should exist', () => {
//   expect(wrapper).toBeDefined();
// });
//
// it('should render a <p> tag with a className day', () => {
//   expect(wrapper.find('.day')).toBeDefined();
//   expect(wrapper.find('.day').text()).toEqual('Tuesday');
// });
//
// it('should render an image displaying the current weather', () => {
//   expect(wrapper.find('.projected-weather-pic')).toBeDefined();
//   expect(wrapper.find('.projected-weather-pic').prop('src')).toEqual("http://icons.wxug.com/i/c/k/clear.gif");
// });
//
// it('should render a <p> tag with a className high-temp', () => {
//   expect(wrapper.find('.high-temp')).toBeDefined();
//   expect(wrapper.find('.high-temp').text()).toEqual('87℉');
// });
//
// it('should render a <p> tag with a className low-temp', () => {
//   expect(wrapper.find('.low-temp')).toBeDefined();
//   expect(wrapper.find('.low-temp').text()).toEqual('63℉');
// });
