import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import PageSettings from './PageSettings';

// eslint-disable-next-line react/display-name
jest.mock('../../components/Page', () => () => <div />);
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useRef: () => ({
    current: {
      password: { value: 'test' },
      select: { value: 'test' },
    },
  }),
}));
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: () => {},
  }),
}));

describe('PageSettings', () => {
  const { location, history } = window;

  beforeAll(() => {
    delete window.location;
    window.location = {
      reload: jest.fn(),
    };
    delete window.history;
    window.history = {
      back: jest.fn(),
    };
  });

  afterAll(() => {
    window.location = location;
    window.history = history;
  });

  const mockedEvent = {
    preventDefault: jest.fn(),
  };

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
