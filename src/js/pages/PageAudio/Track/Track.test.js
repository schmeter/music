import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Track from './Track';

// eslint-disable-next-line react/display-name
jest.mock('../../../components/Mp3File', () => () => <div />);
// eslint-disable-next-line react/display-name
jest.mock('../IconPlay', () => () => <div />);

describe('Track', () => {
  it('renders correctly without active track', () => {
    const props = {
      track: {
        path: 'test',
        tag: {
          track: 1,
        },
      },
    };
    const component = shallow(<Track {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders correctly with active track', () => {
    const props = {
      track: {
        path: 'test',
        tag: {
          track: 1,
        },
      },
      activeTrack: {
        path: 'test',
      },
    };
    const component = shallow(<Track {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
