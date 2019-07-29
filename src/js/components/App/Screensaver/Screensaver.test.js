import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Screensaver from './Screensaver';

jest.mock('../../../util/screen', () => ({
    isTouch: () => false
}));

window.setTimeout = (callback, value) => {
    callback();
    return value;
};

it('renders correctly', () => {
    const props = {
        isPlaying: false
    };
    const component = shallow(<Screensaver {...props} />);

    expect(toJson(component)).toMatchSnapshot();

    component.setProps({
        ...props,
        isPlaying: true
    });
    component.update();

    expect(toJson(component)).toMatchSnapshot();

    document.dispatchEvent(new window.KeyboardEvent('keydown', { keyCode: 0 }));
    document.dispatchEvent(new window.KeyboardEvent('keydown', { keyCode: 37 }));
    document.dispatchEvent(new window.KeyboardEvent('keydown', { keyCode: 39 }));
    document.dispatchEvent(new window.KeyboardEvent('mousemove', {}));

    component.setProps({
        ...props,
        isPlaying: false
    });
    component.update();

    expect(toJson(component)).toMatchSnapshot();

    document.dispatchEvent(new window.KeyboardEvent('mousemove', {}));
});
