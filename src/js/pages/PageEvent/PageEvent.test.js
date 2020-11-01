import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import PageEvent from './PageEvent';

// eslint-disable-next-line react/display-name
jest.mock('../../components/Page', () => () => <div />);

describe('PageEvent', () => {
    it('renders correctly', () => {
        const props = {
            events: [{
                title: 'test',
                date: '2020-02-02',
                artist: {
                    title: 'test',
                },
                imgPath: 'test',
            }, {
                title: 'test',
                date: '2020-02-01',
                artist: {
                    title: 'test',
                },
            }, {
                hidden: true,
                title: 'test',
                date: '2020-02-03',
                artist: {
                    title: 'test',
                },
            }, {
                title: 'test',
                date: '2020-02-03',
                artist: {
                    title: 'test',
                },
            }],
        };
        const component = shallow(<PageEvent {...props} />);

        expect(toJson(component)).toMatchSnapshot();
    });
});
