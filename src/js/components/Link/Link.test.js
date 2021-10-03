import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Link from './Link';

describe('Link', () => {
  const mockedEvent = {
    defaultPrevented: false,
    preventDefault: jest.fn(),
  };
  const onClick = jest.fn();

  it('renders correctly with external url', () => {
    const props = {
      to: 'http://test',
      children: 'test',
      className: 'test',
      onClick,
    };
    const component = shallow(<Link {...props} />);

    component.simulate('click', mockedEvent);

    expect(toJson(component)).toMatchSnapshot();
    expect(props.onClick).toHaveBeenCalled();
  });

  it('renders correctly with internal url', () => {
    const props = {
      to: 'test',
      onClick,
    };
    const component = shallow(<Link {...props} />);

    component.simulate('click', mockedEvent);

    expect(toJson(component)).toMatchSnapshot();
    expect(props.onClick).toHaveBeenCalled();
  });
});
