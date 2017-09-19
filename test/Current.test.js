
import React from 'react';
import { shallow, mount } from 'enzyme';
import Current from '../lib/Components/Current';
import weatherData from '../test-helpers/mockData';

describe('Current function', () => {
  let wrapper;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    const forecast = weatherData.forecast.simpleforecast.forecastday[0];

    wrapper = shallow(<Current
      getNewLocation={mockFn}
      getApi={mockFn}
      location={weatherData.current_observation.display_location.full}
      currentWeatherImg={weatherData.current_observation.icon_url}
      condition={weatherData.current_observation.weather}
      day={forecast.date.weekday}
      dateMonth={forecast.date.month}
      dateDay={forecast.date.day}
      dateYear={forecast.date.year}
      temp={weatherData.current_observation.temp_f}
      highT={forecast.high.fahrenheit}
      lowT={forecast.low.fahrenheit}
      summary={weatherData.forecast.txt_forecast.forecastday[0].fcttext}
    />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render the Search compnonent', () => {
    expect(wrapper.find('Search').length).toEqual(1);
    expect(wrapper.find('Search')).toBeDefined();
  });

  it('should render a city-location to the DOM', () => {
    const location = wrapper.find('.city-location');

    expect(wrapper.find('.city-location')).toBeDefined();
    expect(location.text()).toEqual('Denver, CO ');
  });

  it('should render an img to the DOM', () => {
    const image = wrapper.find('weth-img');
    console.log(image.debug());

    expect(wrapper.find('.weth-img')).toBeDefined();
    expect(wrapper.find('.weth-img').prop('src')).toBe('http://icons.wxug.com/i/c/k/clear.gif');
  });

  it.skip('should render an h4 with a className of weather-desc', () => {
    expect(wrapper.find('.weather-desc')).toBeDefined();
    expect(wrapper.find('.weather-desc').props().children).toEqual('Clear');
  });

  it.skip('should render a p with a className of day', () => {
    expect(wrapper.find('.day')).toBeDefined();
    expect(wrapper.find('.day').props().children).toEqual('Tuesday');
  });

  it.skip('should render a p with a className of date', () => {
    expect(wrapper.find('.date')).toBeDefined();
    expect(wrapper.find('.date').text()).toEqual('8/1/2017');
  });

  it.skip('should render an h1 with a className of current-temp', () => {
    expect(wrapper.find('.current-temp')).toBeDefined();
    expect(wrapper.find('.current-temp').text()).toEqual('83 ℉');
  });

  it.skip('should render a p with a className of high', () => {
    expect(wrapper.find('.high')).toBeDefined();
    expect(wrapper.find('.high').text()).toEqual('High: 87 ℉');
  });

  it.skip('should render a p with a className of low', () => {
    expect(wrapper.find('.low')).toBeDefined();
    expect(wrapper.find('.low').text()).toEqual('Low: 63 ℉');
  });

  it.skip('should render a p with a className of weather-sum', () => {
    expect(wrapper.find('.weather-sum')).toBeDefined();
    expect(wrapper.find('.weather-sum').text()).toEqual('Sunny. High 87F. Winds NE at 5 to 10 mph.');
  });
});
