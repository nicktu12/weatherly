import React from 'react';
import App from '../lib/Components/App';
import { shallow, mount } from 'enzyme';

describe ('App functionality', () => {

  it('should should be a function', () => {
    expect(typeof(App)).toEqual('function');
  });

});
