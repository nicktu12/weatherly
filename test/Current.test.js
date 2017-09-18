import React from 'react';
import Current from '../lib/Components/Current';
import { shallow, mount } from 'enzyme';

describe ('Current functionality', () => {

  it('should should be a function', () => {
    expect(typeof(Current)).toEqual('function');
  });

});
