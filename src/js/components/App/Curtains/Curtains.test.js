import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Curtains from './Curtains';

const mockedEvent = {
    preventDefault: jest.fn(),
};

it('renders correctly', () => {
    const component = shallow(<Curtains />);

    expect(toJson(component)).toMatchSnapshot();

    component.find('div').first().simulate('click', mockedEvent);

    expect(toJson(component)).toMatchSnapshot();
});
