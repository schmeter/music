import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Analyser from './Analyser';

window.AudioContext = class AudioContext {
    createAnalyser = () => ({
        connect: jest.fn(),
        getByteFrequencyData: jest.fn(),
        getByteTimeDomainData: jest.fn(),
        frequencyBinCount: 8
    });
    createMediaElementSource = () => ({
        connect: jest.fn()
    });
};

window.HTMLCanvasElement.prototype.getContext = () => ({
    clearRect: jest.fn(),
    fillRect: jest.fn()
});

it('renders correctly', () => {
    let props = {
        audio: {},
        isPlaying: false
    };

    let component = mount(<Analyser {...props} />);
    expect(toJson(component)).toMatchSnapshot();

    props = {
        ...props,
        isPlaying: true
    };

    component.setProps(props);
    component.update();
    expect(toJson(component)).toMatchSnapshot();

    component.unmount();

    props = {
        audio: {},
        isPlaying: false
    };

    component = mount(<Analyser {...props} />);
    expect(toJson(component)).toMatchSnapshot();

    props = {
        ...props,
        isPlaying: true,
        mode: 'waveform'
    };

    component.setProps(props);
    component.update();
    expect(toJson(component)).toMatchSnapshot();
});
