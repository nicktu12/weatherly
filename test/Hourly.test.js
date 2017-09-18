import React from 'react';
import Hourly from '../lib/Components/Hourly';
import { shallow, mount } from 'enzyme';

describe ('Hourly functionality', () => {

  it('should should be a function', () => {
    expect(typeof(Hourly)).toEqual('function');
  });

});
