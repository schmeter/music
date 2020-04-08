import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Info from './Info';
import Link from '../../Link';
// import { scrollTop } from '../../../util/screen';

jest.mock('../../../util/screen', () => ({
    scrollTop: jest.fn(),
}));

describe('Info', () => {
    const mockedEvent = {
        preventDefault: jest.fn(),
    };

    it('renders correctly', () => {
        const activeTrack = {
            path: 'test',
            tag: {
                title: 'test',
            },
            artist: {
                id: 'test',
            },
            album: {
                id: 'test',
                title: 'test',
                imgPath: 'test',
            },
        };
        const lyrics = 'test';
        const props = {
            closeLayers: jest.fn(),
        };
        const component = shallow(<Info {...props} />);

        expect(toJson(component)).toMatchSnapshot();

        component.setProps({
            ...props,
            activeTrack,
        });
        component.update();

        // TODO: activate when enzyme supports hooks
        // expect(scrollTop).toHaveBeenCalled();

        component.setProps({
            ...props,
            activeTrack: {
                ...activeTrack,
                tag: {
                    title: 'test',
                    artist: 'test',
                    album: 'test',
                },
                lyrics,
            },
        });
        component.update();
        component.find('.cover').find(Link).simulate('click', mockedEvent);

        expect(toJson(component)).toMatchSnapshot();
        expect(props.closeLayers).toHaveBeenCalled();
    });
});
