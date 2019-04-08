import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Info from './Info';
import Link from '../../Link';

const mockedEvent = {
    preventDefault: jest.fn()
};

it('renders correctly', () => {
    const activeTrack = {
        path: 'test',
        imgPath: 'test',
        tag: {
            title: 'test'
        },
        artist: {
            id: 'test'
        },
        album: {
            id: 'test',
            title: 'test'
        }
    };

    const lyrics = 'test';

    let props = {
        closeLayers: jest.fn()
    };

    let component = shallow(<Info {...props} />);
    expect(toJson(component)).toMatchSnapshot();

    props = {
        ...props,
        activeTrack
    };

    component.setProps(props);
    component.update();
    expect(toJson(component)).toMatchSnapshot();

    props = {
        ...props,
        activeTrack: {
            ...activeTrack,
            tag: {
                title: 'test',
                artist: 'test',
                album: 'test'
            },
            lyrics
        }
    };

    component.setProps(props);
    component.update();
    expect(toJson(component)).toMatchSnapshot();

    component.find('.cover').find(Link).simulate('click', mockedEvent);
    expect(props.closeLayers).toHaveBeenCalled();
});
