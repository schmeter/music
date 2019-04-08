import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import File from './File';
import Link from '../Link';

const mockedEvent = {
    preventDefault: jest.fn()
};

it('renders correctly', () => {
    const props = {
        path: 'http://test',
        onClickFile: jest.fn()
    };

    const component = shallow(<File {...props} >test</File>);

    expect(toJson(component)).toMatchSnapshot();

    component.find(Link).simulate('click', mockedEvent);
    expect(props.onClickFile).toHaveBeenCalled();
});
