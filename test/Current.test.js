import React from 'react';
import { shallow, mount } from 'enzyme';
import Current from '../lib/Components/Current';

describe('DailyWeather', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Current
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
    expect(wrapper.find('div.current-div').length).toEqual(1);
  });

  it('should render a div element with a class of current-container', () => {
    expect(wrapper.find('div.current-container').length).toEqual(1);
  });

  it('should render a p element with a class of current-location', () => {
    expect(wrapper.find('p.current-location').length).toEqual(1);
  });

  it('should render a p element with a class of current-location', () => {
    expect(wrapper.find('p.current-location').text()).toEqual('Denver, CO');
  });

  it('should render one h2 elements', () => {
    expect(wrapper.find('p.current-zip').text()).toEqual('80238');
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
