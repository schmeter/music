import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import PageFeatures from './PageFeatures';

jest.mock('../../components/Page', () => () => <div />);
jest.mock('../../components/IFrame', () => () => <div />);

describe('PageFeatures', () => {
    it('renders correctly', () => {
        const props = {
            albums: [],
            videos: [],
            events: [],
        };
        const component = shallow(<PageFeatures {...props} />);

        expect(toJson(component)).toMatchSnapshot();
    });
});
