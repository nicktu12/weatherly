import React from 'react';
import Daily from '../lib/Components/Daily';
import { shallow, mount } from 'enzyme';
//

describe ('Daily functionality', () => {
  let wrapper;

beforeEach(() => {
  wrapper = shallow(<Daily
    condition = {true}
    location = 'Denver, CO'
    zip = '80238'
    temp = {76}
    iconUrl = 'www.icon.com'
    condition = {true}
    high = {90}
    low = {70}
    />);
    console.log(wrapper.debug());
});

it('should exist', () => {
  expect(wrapper).toBeDefined();
});

it('should render a table element with a class of daily-div', () => {
  expect(wrapper.find('table.daily-div').length).toEqual(1);
});

  it('should should be a function', () => {
    expect(typeof(Daily)).toEqual('function');
  });

});
