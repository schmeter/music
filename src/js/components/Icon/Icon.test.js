import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Icon from './Icon';

it('renders correctly', () => {
    const props = {
        id: 'test'
    };
    const component = shallow(<Icon {...props} />);

    expect(toJson(component)).toMatchSnapshot();
});
