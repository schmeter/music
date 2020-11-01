import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import PageFeatures from './PageFeatures';

// eslint-disable-next-line react/display-name
jest.mock('../../components/Page', () => () => <div />);
// eslint-disable-next-line react/display-name
jest.mock('../../components/Iframe', () => () => <div />);

describe('PageFeatures', () => {
    it('renders correctly as index page', () => {
        const props = {
            isIndexPage: true,
            albums: [],
            videos: [],
            events: [],
        };
        const component = mount(<PageFeatures {...props} />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('renders correctly with data', () => {
        const props = {
            albums: [{
                title: 'test',
                imgPath: 'test',
                artist: {
                    id: 'test',
                    title: 'test',
                },
            }],
            videos: [{
                artist: {
                    title: 'test',
                },
            }],
            events: [{
                title: 'test',
                imgPath: 'test',
                date: '2020-06-11 00:00:00',
                artist: {
                    title: 'test',
                },
            }],
        };
        const component = mount(<PageFeatures {...props} />);

        expect(toJson(component)).toMatchSnapshot();
    });

    it('renders correctly with future date', () => {
        const props = {
            albums: [],
            videos: [],
            events: [{
                title: 'test',
                imgPath: 'test',
                date: '2120-06-11 00:00:00',
                artist: {
                    title: 'test',
                },
            }],
        };
        const component = mount(<PageFeatures {...props} />);

        expect(toJson(component)).toMatchSnapshot();
    });
});
