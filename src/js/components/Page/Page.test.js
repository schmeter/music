import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Page from './Page';
// import { setTitle } from '../../services/meta';
// import { scrollTop } from '../../util/screen';

jest.mock('react-router', () => ({
    withRouter: component => component,
}));
jest.mock('../../util/screen', () => ({
    scrollTop: jest.fn(),
}));
jest.mock('../../services/meta', () => ({
    setTitle: jest.fn(),
}));

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

it('uses setTitle helper on mount and scrollTop helper on location change', () => {
    const props = {
        id: 'test',
        location: {
            pathname: 'test',
        },
    };
    const component = shallow(<Page {...props} />);

    // TODO: activate when enzyme supports hooks
    // expect(setTitle).toHaveBeenCalled();

    component.setProps({
        location: {
            pathname: 'test2',
        },
    });
    component.update();

    // TODO: activate when enzyme supports hooks
    // expect(scrollTop).toHaveBeenCalled();
});

