import React from 'react';
import Search from '../lib/Search.js';
import { shallow, mount } from 'enzyme';

describe('Search functionality', () => {
  const shallowSearch = shallow(<Search />)

  it('should start as a blank string', () => {
    let input = shallowSearch.find('input')

    expect(shallowSearch.state('inputLocation')).toEqual('');
  })

  it('should change state when string is inputted', () => {
    let input = shallowSearch.find('input')

    expect(shallowSearch.state('inputLocation')).toEqual('');

    let event = { target: { value: 'Denver, CO' } }

    input.simulate('change', event)

    expect(shallowSearch.state('inputLocation')).toEqual('Denver, CO');
  })

})
