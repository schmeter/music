import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import PageMenu from './PageMenu';

// eslint-disable-next-line react/display-name
jest.mock('../Page', () => () => <div />);
// eslint-disable-next-line react/display-name
jest.mock('../../components/Menu', () => () => <div />);

describe('PageMenu', () => {
  it('renders correctly', () => {
    const props = {
      activeTrack: {
        album: {
          imgPath: 'test',
        },
      },
    };
    const component = mount(<PageMenu {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
