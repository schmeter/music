import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Player from './Player';

window.HTMLMediaElement.prototype.load = jest.fn();
window.HTMLMediaElement.prototype.play = jest.fn();
window.HTMLMediaElement.prototype.pause = jest.fn();

it('renders correctly', () => {
    const tracks = [{
        path: 'test1',
        tag: {
            title: 'test1'
        }
    }, {
        path: 'test2',
        tag: {
            title: 'test2'
        }
    }];
    const props = {
        setActiveIndex: jest.fn(),
        setIsPlaying: jest.fn(),
        saveActiveTrack: jest.fn(),
        tracks,
        activeIndex: 0,
        nextIndex: 1,
        playToggle: false,
        isPlaying: false
    };
    const component = mount(<Player {...props} />);

    expect(toJson(component)).toMatchSnapshot();

    component.setProps({
        ...props,
        activeIndex: 1,
        playToggle: false
    });
    component.update();

    expect(toJson(component)).toMatchSnapshot();

    component.setProps({
        ...props,
        activeIndex: 1,
        playToggle: true
    });
    component.update();

    expect(toJson(component)).toMatchSnapshot();

    component.setProps({
        ...props,
        tracks: [],
        activeIndex: 2,
        isPlaying: true
    });
    component.update();

    expect(toJson(component)).toMatchSnapshot();

    document.dispatchEvent(new window.KeyboardEvent('keydown', { keyCode: 0 }));
    document.dispatchEvent(new window.KeyboardEvent('keydown', { keyCode: 32 }));

    component.setProps({
        ...props,
        isPlaying: false
    });
    component.update();

    expect(toJson(component)).toMatchSnapshot();

    document.dispatchEvent(new window.KeyboardEvent('keydown', { keyCode: 32 }));
    component.find('audio').simulate('play');
    component.find('audio').simulate('pause');
    component.find('audio').simulate('ended');
    component.find('audio').simulate('error');
    document.dispatchEvent(new window.KeyboardEvent('keydown', { keyCode: 37 }));
    document.dispatchEvent(new window.KeyboardEvent('keydown', { keyCode: 39 }));
    component.find('audio').simulate('focus');
    document.dispatchEvent(new window.KeyboardEvent('keydown', { keyCode: 32 }));
});
