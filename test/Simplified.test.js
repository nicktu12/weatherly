import React from 'react';
import { shallow, mount } from 'enzyme';
import Simplified from '../lib/Components/Simplified';

describe('DailyWeather', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Simplified
      condition = {true}
      location = 'Denver, CO'
      zip = '80238'
      temp = {76}
      iconUrl = 'www.icon.com'
      condition = {true}
      high = {90}
      low = {70}

      />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render a div element with a class of current', () => {
    expect(wrapper.find('div.simple-div').length).toEqual(1);
  });

  it('should render a div element with a class of current-container', () => {
    expect(wrapper.find('table.simple-current').length).toEqual(1);
  });

  it('should render a div element with a class of current-container', () => {
    expect(wrapper.find('span.simple-zip').length).toEqual(1);
  });

  it('should render a p element with a class of current-location', () => {
    expect(wrapper.find('span.simple-zip').text()).toEqual('80238');
  });

  it('should render one h2 elements', () => {
    expect(wrapper.find('span.hi').text()).toEqual('90');
  });

  it('should have a property of icon', () => {
    expect(wrapper.props('iconUrl')).toBeDefined();
  });

  it('should have a property of city', () => {
    expect(wrapper.props('high')).toBeDefined();
  });

  it('should have a property of state', () => {
    expect(wrapper.props('low')).toBeDefined();
  });
});
