import React from 'react';
import App from '../lib/Components/App';
import { shallow, mount } from 'enzyme';
import LocalStorage from '../lib/Utilities/MockLS'

describe ('App functionality', () => {
  let wrapper;
  window.localStorage = new LocalStorage();

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should should be a function', () => {

    expect(typeof(App)).toEqual('function');
  });

  it('should use returnLocation method to set location in state', () => {
    expect(wrapper.state().fullLocal).toEqual('');
    wrapper.instance().returnLocation('Boston, MA')
    expect(wrapper.state().local).toEqual('Boston, MA');
  })

  it('should render a welcome component', () => {
    expect(wrapper.find('Welcome').length).toEqual(1)
  })

  it('should have default values for set', () => {
    expect(wrapper.state().location).toEqual('');
    expect(wrapper.state().fullLocal).toEqual('');
    expect(wrapper.state().temp).toEqual('');
    expect(wrapper.state().zip).toEqual('');
    expect(wrapper.state().condition).toEqual('');
    expect(wrapper.state().high).toEqual('');
    expect(wrapper.state().low).toEqual('');
    expect(wrapper.state().day).toEqual('');
    expect(wrapper.state().hourly).toEqual('');
    expect(wrapper.state().iconText).toEqual('');
    expect(wrapper.state().iconUrl).toEqual('');
    expect(wrapper.state().lastUpdated).toEqual('');
    expect(wrapper.state().forecastString).toEqual('');
    expect(wrapper.state().displayWelcome).toEqual(true);
    expect(wrapper.state().weatherData).toEqual([]);
  })

});
