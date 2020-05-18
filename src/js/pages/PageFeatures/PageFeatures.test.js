import React from 'react';
import { mount } from 'enzyme';
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
        const component = mount(<PageFeatures {...props} />);

        expect(toJson(component)).toMatchSnapshot();
    });
});
