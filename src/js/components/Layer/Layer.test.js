import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Layer from './Layer';

const mockedEvent = {
    preventDefault: jest.fn(),
};

it('renders correctly', () => {
    const props = {
        id: 'test',
        className: 'test',
        children: 'test',
        activeId: 'test2',
        closeLayers: jest.fn(),
    };
    const component = shallow(<Layer {...props} />);

    component.find('button').simulate('click', mockedEvent);

    expect(toJson(component)).toMatchSnapshot();
    expect(props.closeLayers).toHaveBeenCalled();
});

it('renders correctly with id only', () => {
    const props = {
        id: 'test',
        activeId: 'test2',
        closeLayers: jest.fn(),
    };
    const component = shallow(<Layer {...props} />);

    expect(toJson(component)).toMatchSnapshot();
});
