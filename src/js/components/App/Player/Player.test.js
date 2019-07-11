import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Player from './Player';

window.HTMLMediaElement.prototype.load = jest.fn();
window.HTMLMediaElement.prototype.play = jest.fn();
window.HTMLMediaElement.prototype.pause = jest.fn();

it('renders correctly', () => {
    const file1 = {
        path: 'test1',
        tag: {
            title: 'test1'
        }
    };
    const file2 = {
        path: 'test2',
        tag: {
            title: 'test2'
        }
    };
    const tracks = [file1, file2];

    let props = {
        requestAudioData: jest.fn(),
        setActiveTrack: jest.fn(),
        setActiveIndex: jest.fn(),
        setIsPlaying: jest.fn(),
        tracks,
        activeIndex: 0,
        playToggle: false,
        isPlaying: false,
        isLoggedIn: false
    };

    let component = mount(<Player {...props} />);

    expect(toJson(component)).toMatchSnapshot();

    props = {
        ...props,
        activeIndex: 1,
        playToggle: true
    };

    component.setProps(props);
    component.update();
    expect(toJson(component)).toMatchSnapshot();

    props = {
        ...props,
        tracks: [],
        activeIndex: 2,
        isPlaying: true,
        isLoggedIn: true
    };

    component.setProps(props);
    component.update();
    expect(toJson(component)).toMatchSnapshot();

    document.dispatchEvent(new window.KeyboardEvent('keydown', { keyCode: 0 }));

    document.dispatchEvent(new window.KeyboardEvent('keydown', { keyCode: 32 }));

    props = {
        ...props,
        isPlaying: false
    };

    component.setProps(props);
    component.update();
    expect(toJson(component)).toMatchSnapshot();

    document.dispatchEvent(new window.KeyboardEvent('keydown', { keyCode: 32 }));

    component.find('audio').simulate('play');
    component.find('audio').simulate('pause');
    component.find('audio').simulate('ended');
    component.find('audio').simulate('error');

    document.dispatchEvent(new window.KeyboardEvent('keydown', { keyCode: 37 }));
    document.dispatchEvent(new window.KeyboardEvent('keydown', { keyCode: 39 }));
});
