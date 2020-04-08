import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import IFrame from './IFrame';

describe('IFrame', () => {
    it('renders correctly', () => {
        const props = {
            src: 'test',
            className: 'test',
            onLoad: jest.fn(),
        };
        const component = mount(<IFrame {...props} />);

        component.simulate('load');

        expect(toJson(component)).toMatchSnapshot();
        // expect(props.onLoad).toHaveBeenCalled();
    });
});
