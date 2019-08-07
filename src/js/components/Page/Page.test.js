import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Page from './Page';
import { scrollTop } from '../../util/screen';

jest.mock('react-router', () => {
    return { withRouter: component => component };
});
jest.mock('../../util/screen', () => {
    return { scrollTop: jest.fn() };
});

it('renders correctly with all parameters', () => {
    const props = {
        id: 'test',
        title: 'test',
        className: 'test',
        children: 'test',
        useBaseClass: false,
        location: {
            pathname: 'test',
        },
    };
    const component = shallow(<Page {...props} />);

    expect(toJson(component)).toMatchSnapshot();
});

it('renders correctly with id only', () => {
    const props = {
        id: 'test',
    };
    const component = shallow(<Page {...props} />);

    expect(toJson(component)).toMatchSnapshot();
});

it('uses scrollTop helper on location change', () => {
    const props = {
        id: 'test',
        location: {
            pathname: 'test',
        },
    };
    const component = shallow(<Page {...props} />);

    component.setProps({
        location: {
            pathname: 'test',
        },
    });
    component.update();

    expect(scrollTop).not.toHaveBeenCalled();

    component.setProps({
        location: {
            pathname: '',
        },
    });
    component.update();

    expect(scrollTop).toHaveBeenCalled();
});
