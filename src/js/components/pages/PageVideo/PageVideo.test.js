import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import PageVideo from './PageVideo';

jest.mock('../../Page', () => () => <div />);
jest.mock('./Video', () => () => <div />);

it('renders correctly', () => {
    const props = {
        videos: [{
            id: 'test',
        }, {
            hidden: true,
            id: 'test2',
        }],
    };
    const component = shallow(<PageVideo {...props} />);

    expect(toJson(component)).toMatchSnapshot();
});
