import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Screensaver from './Screensaver';

jest.mock('../../helpers/screen', () => ({
  isTouch: () => false,
}));

describe('Screensaver', () => {
  window.setTimeout = (callback, value) => {
    callback();
    return value;
  };

  it('renders correctly', () => {
    const props = {
      config: {
        active: true,
        timeout: 0,
      },
      isPlaying: false,
    };
    const component = shallow(<Screensaver {...props}><div /></Screensaver>);

    expect(toJson(component)).toMatchSnapshot();

    component.setProps({
      ...props,
      isPlaying: true,
    });
    component.update();

    expect(toJson(component)).toMatchSnapshot();

    document.dispatchEvent(new window.KeyboardEvent('keydown', { keyCode: 0 }));
    document.dispatchEvent(new window.KeyboardEvent('keydown', { keyCode: 37 }));
    document.dispatchEvent(new window.KeyboardEvent('keydown', { keyCode: 39 }));
    document.dispatchEvent(new window.KeyboardEvent('mousemove', {}));

    component.setProps({
      ...props,
      isPlaying: false,
    });
    component.update();

    expect(toJson(component)).toMatchSnapshot();

    document.dispatchEvent(new window.KeyboardEvent('mousemove', {}));
  });
});
