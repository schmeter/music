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

    const component = mount(<Image {...props} >test</Image>);
    expect(toJson(component)).toMatchSnapshot();

    component.simulate('error');
    component.setState({ error: true });
    component.simulate('error');
    component.simulate('load');
    expect(props.handleLoad).toHaveBeenCalled();
});
