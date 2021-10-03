import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TransitionItem from './TransitionItem';

describe('TransitionItem', () => {
  it('renders correctly', () => {
    const component = shallow(<TransitionItem>test</TransitionItem>);

    expect(toJson(component)).toMatchSnapshot();
  });
});
