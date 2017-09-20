import React from 'react';
import Card from '../lib/Components/Card';
import { shallow, mount } from 'enzyme';

describe ('Card functionality', () => {

const shallowCard = shallow(<Card hourlyTemp='87'
                                  hour='9:00 AM'
                                  icon='sunny.png'
                                  condition='Party Cloudy'
                                  key=''/>);

  it('should should be a function', () => {
    expect(typeof(Card)).toEqual('function');
  });

  it('should display the time', () => {
    const time = shallowCard.find('.card-hour');

    expect(time.text()).toEqual('9:00 AM');
  });

  it('should display the condition', () => {
    const condition = shallowCard.find('.card-condition');

    expect(condition.text()).toEqual('Party Cloudy');
  });

  it('should display the temperature', () => {
    const temp = shallowCard.find('.card-temp');

    expect(temp.text()).toEqual('87°F');
  });

  it('should contain one container div', () => {
    const div = shallowCard.find('div');

    expect(div.length).toEqual(1);
  });

  it('should contain one img', () => {
    const img = shallowCard.find('img');

    expect(img.length).toEqual(1);
  });

  it('should contain three p tags', () => {
    const p = shallowCard.find('p');

    expect(p.length).toEqual(3);
  });

});
