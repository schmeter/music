import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Layer from './Layer';
import Link from '../Link';


const mockedEvent = {
    preventDefault: jest.fn()
};

it('renders correctly', () => {
    const props = {
        id: 'test',
        activeId: 'test2',
        closeLayers: jest.fn()
    };

    const component = shallow(<Layer {...props} >test</Layer>);
    expect(toJson(component)).toMatchSnapshot();

    component.find(Link).simulate('click', mockedEvent);
    expect(props.closeLayers).toHaveBeenCalled();
});
