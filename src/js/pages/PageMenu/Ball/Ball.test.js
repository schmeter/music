import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Ball from './Ball';

let mockMousePosition = {};

jest.mock('./useMousePosition', () => () => (mockMousePosition));

describe('Ball', () => {
  it('renders correctly', () => {
    mockMousePosition = { x: null, y: null, visible: false };
    const component = shallow(<Ball />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders correctly with mouse position', () => {
    mockMousePosition = { x: 50, y: 50, visible: true };
    const component = shallow(<Ball />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
