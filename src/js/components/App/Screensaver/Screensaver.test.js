import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Screensaver from './Screensaver';


jest.mock('../../../util/browser', () => ({
    isTouch: () => false
}));

window.setTimeout = (callback, value) => {
    callback();
    return value;
};

it('renders correctly', () => {
    let props = {
        isPlaying: false
    };

    let component = shallow(<Screensaver {...props} />);
    expect(toJson(component)).toMatchSnapshot();

    props = {
        ...props,
        isPlaying: true
    };

    component.setProps(props);
    component.update();
    expect(toJson(component)).toMatchSnapshot();

    document.dispatchEvent(new window.KeyboardEvent('keydown', { keyCode: 0 }));
    document.dispatchEvent(new window.KeyboardEvent('keydown', { keyCode: 37 }));
    document.dispatchEvent(new window.KeyboardEvent('keydown', { keyCode: 39 }));

    document.dispatchEvent(new window.KeyboardEvent('mousemove', {}));

    props = {
        ...props,
        isPlaying: false
    };

    component.setProps(props);
    component.update();
    expect(toJson(component)).toMatchSnapshot();

    document.dispatchEvent(new window.KeyboardEvent('mousemove', {}));
});
