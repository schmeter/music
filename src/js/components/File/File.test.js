import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import File from './File';
import Link from '../Link';

describe('File', () => {
  const mockedEvent = {
    preventDefault: jest.fn(),
  };

  it('renders correctly', () => {
    const props = {
      path: 'http://test',
      children: 'test',
      onClickFile: jest.fn(),
    };
    const component = shallow(<File {...props} />);

    component.find(Link).simulate('click', mockedEvent);

    expect(toJson(component)).toMatchSnapshot();
    expect(props.onClickFile).toHaveBeenCalled();
  });
});
