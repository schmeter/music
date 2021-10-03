import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Page from './Page';

jest.mock('react-router', () => ({
  withRouter: component => component,
}));

describe('Page', () => {
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
    const component = mount(<Page {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders correctly with id only', () => {
    const props = {
      id: 'test',
    };
    const component = mount(<Page {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
