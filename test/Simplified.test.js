import React from 'react';
import Simplified from '../lib/Components/Simplified';
import { shallow, mount } from 'enzyme';

describe ('Simplified functionality', () => {

  it('should should be a function', () => {
    expect(typeof(Simplified)).toEqual('function');
  });

});
