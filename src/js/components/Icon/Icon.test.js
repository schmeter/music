import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Icon from './Icon';

describe('Icon', () => {
    it('renders correctly', () => {
        const props = {
            id: 'test',
            spin: true,
        };
        const component = shallow(<Icon {...props} />);

        expect(toJson(component)).toMatchSnapshot();
    });
});
