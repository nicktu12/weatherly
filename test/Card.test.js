import React from 'react';
import Card from '../lib/Components/Card';
import { shallow, mount } from 'enzyme';

describe ('Card functionality', () => {

  it('should should be a function', () => {
    expect(typeof(Card)).toEqual('function');
  });

});
