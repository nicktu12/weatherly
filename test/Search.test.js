import React from 'react';
import Search from '../lib/Components/Search';
import { shallow, mount } from 'enzyme';

describe('Search functionality', () => {
  const shallowSearch = shallow(<Search />)

  it('should start as a blank string', () => {
    console.log(shallowSearch.debug());

    expect(shallowSearch.state('inputLocation')).toEqual('');
  })

  // it.skip('should change state when string is inputted', () => {
  //   let input = shallowSearch.find('input')
  //
  //   expect(shallowSearch.state('inputLocation')).toEqual('');
  //
  //   let event = { target: { value: 'Denver, CO' } }
  //
  //   input.simulate('change', event)
  //
  //   expect(shallowSearch.state('inputLocation')).toEqual('Denver, CO');
  // })

})
