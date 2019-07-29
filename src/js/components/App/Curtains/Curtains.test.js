import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Curtains from './Curtains';

const mockedEvent = {
    preventDefault: jest.fn()
};

it('renders correctly', () => {
    const props = {
        path: 'http://test',
        onClickFile: jest.fn()
    };
    const component = shallow(<Curtains {...props} />);

    component.find('div').first().simulate('click', mockedEvent);

    expect(toJson(component)).toMatchSnapshot();
    expect(toJson(component)).toMatchSnapshot();
});
