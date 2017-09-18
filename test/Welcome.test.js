import React from 'react';
import Welcome from '../lib/Components/Welcome';
import { shallow, mount } from 'enzyme';

describe ('Welcome functionality', () => {

  it('should should be a function', () => {
    expect(typeof(Welcome)).toEqual('function');
  });

});
