import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import PageSettings from './PageSettings';

jest.mock('../../components/Page', () => () => <div />);
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    createRef: () => ({
        current: {
            password: { value: 'test' },
            select: { value: 'test' },
        },
    }),
}));

describe('PageSettings', () => {
    const mockedEvent = {
        preventDefault: jest.fn(),
    };

    window.history.back = jest.fn();
    delete window.location;
    window.location = { reload: jest.fn() };

    it('renders correctly with logged in user', () => {
        const props = {
            isLoggedIn: true,
            login: jest.fn(),
            logout: jest.fn(),
        };
        const component = shallow(<PageSettings {...props} />);

        expect(toJson(component)).toMatchSnapshot();

        component.find('.form-auth').simulate('submit', mockedEvent);

        expect(props.logout).toHaveBeenCalled();
    });

    it('renders correctly with logged out user', () => {
        const props = {
            isLoggedIn: false,
            login: jest.fn(),
            logout: jest.fn(),
        };
        const component = shallow(<PageSettings {...props} />);

        expect(toJson(component)).toMatchSnapshot();

        component.find('.form-auth').simulate('submit', mockedEvent);

        expect(props.login).toHaveBeenCalled();
    });

    it('uses window.history.back on quit', () => {
        const props = {
            isLoggedIn: true,
            login: jest.fn(),
            logout: jest.fn(),
        };
        const component = shallow(<PageSettings {...props} />);

        component.find('.form-quit').simulate('submit', mockedEvent);

        expect(window.history.back).toHaveBeenCalled();
    });

    it('uses window.history.reload on quit', () => {
        const props = {
            isLoggedIn: true,
            login: jest.fn(),
            logout: jest.fn(),
        };
        const component = shallow(<PageSettings {...props} />);

        component.find('.form-select').simulate('change', mockedEvent);

        expect(window.location.reload).toHaveBeenCalled();
    });
});
