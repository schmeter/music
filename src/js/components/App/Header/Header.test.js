import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from './Header';

const mockedEvent = {
    preventDefault: jest.fn()
};

it('renders correctly', () => {
    const props = {
        openLayer: jest.fn()
    };
    const component = shallow(<Header {...props} />);

    component.find('.info-button').simulate('click', mockedEvent);

    expect(toJson(component)).toMatchSnapshot();
    expect(props.openLayer).toHaveBeenCalled();
});
