import React from 'react';
import Daily from '../lib/Components/Daily';
import { shallow, mount } from 'enzyme';

describe ('Daily functionality', () => {

  it('should should be a function', () => {
    expect(typeof(Daily)).toEqual('function');
  });

});
