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
    expect(toJson(component)).toMatchSnapshot();

    component.find('.info-button').simulate('click', mockedEvent);
    expect(props.openLayer).toHaveBeenCalled();
});
