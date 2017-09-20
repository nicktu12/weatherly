import React from 'react';
import Daily from '../lib/Components/Daily';
import { shallow, mount } from 'enzyme';
import mockData from '../lib/Utilities/MockWeatherData'

describe ('Daily functionality', () => {
  let wrapper;

  let splicedMock = mockData.forecast.simpleforecast.forecastday.splice(1, 10);

  beforeEach(() => {
    wrapper = shallow(<Daily
                        dailyData={splicedMock}
                        />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should should be a function', () => {
    expect(typeof(Daily)).toEqual('function');
  });

  it('should render a table element with a class of daily-div', () => {
    expect(wrapper.find('table.daily-div').length).toEqual(1);
  });

  it('should render nine tbody elements', () => {
    expect(wrapper.find('tbody').length).toEqual(9);
  })

  it('should render the current day of the week', () => {
    let days = wrapper.find('.table-day');
    expect(days.nodes[0].props.children).toEqual('Tuesday');
  });

  it('should render the current date', () => {
    let date = wrapper.find('.table-date');
    expect(date.nodes[1].props.children).toEqual([ 'Aug', 2 ]);
  });

  it('should render the weather icon', () => {
    let icon = wrapper.find('.table-icon');
    expect(icon.nodes[2].props.children).toEqual(<img src="http://icons.wxug.com/i/c/k/chancetstorms.gif" />);
  });

  it('should render the hi and lo temp', () => {
    let hi = wrapper.find('.hi');
    let low = wrapper.find('.low');

    expect(hi.nodes[2].props.children).toEqual("72");
    expect(low.nodes[2].props.children).toEqual("57");
  });

});
