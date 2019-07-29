import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Image from './Image';

it('renders correctly', () => {
    const props = {
        src: 'test',
        alt: 'test',
        className: 'test',
        handleLoad: jest.fn()
    };
    const component = mount(<Image {...props} />);

    component.simulate('error');
    component.setState({ error: true });
    component.simulate('error');
    component.simulate('load');

    expect(toJson(component)).toMatchSnapshot();
    expect(props.handleLoad).toHaveBeenCalled();
});
