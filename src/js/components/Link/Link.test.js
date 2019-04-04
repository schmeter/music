import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Link from './Link';


window.open = jest.fn();

const mockedEvent = {
    defaultPrevented: false,
    preventDefault: jest.fn()
};

it('renders correctly with external url', () => {
    const props = {
        to: 'http://test',
        onClick: jest.fn()
    };

    const component = shallow(<Link {...props} >test</Link>);
    expect(toJson(component)).toMatchSnapshot();

    component.simulate('click', mockedEvent);
    expect(props.onClick).toHaveBeenCalled();
});

it('renders correctly with internal url', () => {
    const props = {
        to: 'test',
        onClick: jest.fn()
    };

    const component = shallow(<Link {...props} />);
    expect(toJson(component)).toMatchSnapshot();

    component.simulate('click', mockedEvent);
    expect(props.onClick).toHaveBeenCalled();
});
