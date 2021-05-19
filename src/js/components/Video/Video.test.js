import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Link from '../Link';
import Image from '../Image';
import Video from './Video.js';

describe('Video', () => {
    const mockedEvent = {
        preventDefault: jest.fn(),
    };

    it('renders correctly', () => {
        const props = {
            video: {
                id: 'test',
                title: 'The Video',
                artist: {
                    title: 'test',
                },
            },
            isPlaying: true,
            togglePlay: jest.fn(),
        };
        const component = shallow(<Video {...props} />);

        expect(toJson(component)).toMatchSnapshot();

        component.find(Image).props().onLoad();

        expect(toJson(component)).toMatchSnapshot();

        component.find(Link).simulate('click', mockedEvent);

        expect(props.togglePlay).toHaveBeenCalled();
    });
});
