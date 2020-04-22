import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import AlbumCover from './AlbumCover';
import Link from '../../../components/Link';

jest.mock('../../../components/Link', () => () => <div />);
jest.mock('../../../components/Image', () => () => <div />);

describe('AlbumCover', () => {
    const mockedEvent = {
        preventDefault: jest.fn(),
    };

    it('renders correctly with link', () => {
        const props = {
            link: 'test',
            album: {
                imgPath: 'test',
            },
        };
        const component = shallow(<AlbumCover {...props} />);

        component.find(Link).first().simulate('click', mockedEvent);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('renders correctly without link', () => {
        const props = {
            link: '',
            album: {
                imgPath: 'test',
            },
        };
        const component = shallow(<AlbumCover {...props} />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('renders correctly wit imgItems', () => {
        const props = {
            link: '',
            album: {
                imgPath: 'test',
                imgFolder: 'test',
                imgItems: [
                    'test',
                    'test2',
                ],
            },
        };
        const component = shallow(<AlbumCover {...props} />);

        expect(toJson(component)).toMatchSnapshot();

        component.find(Link).first().simulate('click', mockedEvent);

        expect(toJson(component)).toMatchSnapshot();

        component.find(Link).first().simulate('click', mockedEvent);

        expect(toJson(component)).toMatchSnapshot();

        component.find(Link).first().simulate('click', mockedEvent);

        expect(toJson(component)).toMatchSnapshot();
    });
});
