import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Components/Search.js';
import App from '../lib/Components/App.js';
import Trie from '../lib/Utilities/Trie.js';

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search
      value = ""
      />);
  });

  it('should render an input field', () => {
    const search = shallow(<Search />);

    expect(search.find('.location-search')).toBeDefined();
  });

  it('should render a div', () => {
    const search = shallow(<Search />);

    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render a Select', () => {
    const search = shallow(<Search />);

    expect(wrapper.find('Select.inputSelection').length).toEqual(1);
  });

  it('should render a button', () => {
    const search = shallow(<Search />);

    expect(wrapper.find('button.search-button').length).toEqual(1);
  });

  it('should render an input field', () => {
    const search = shallow(<Search />);

    expect(search.find('.location-search')).toBeDefined();
  });

  it('should change state based on the input', () => {
    const search = mount(<Search />);
    const input = search.find('input');

    expect(search.state('inputLocation')).toEqual('');

    const inputValue = { target: { value: 'Boston' } };

    input.simulate('change', inputValue);

    expect(search.state('inputLocation')).toEqual('Boston');
  });

  it('should render an button field', () => {
    const search = shallow(<Search />);

    expect(search.find('.sub-btn')).toBeDefined();
  });

});
