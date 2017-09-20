import React from 'react';
import Search from '../lib/Components/Search';
import { shallow, mount } from 'enzyme';

describe('Search functionality', () => {
  const shallowSearch = shallow(<Search />)

  it('should start as a blank string', () => {

    expect(shallowSearch.state('inputLocation')).toEqual('');
  })

})
