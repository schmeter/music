import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TrackList from './TrackList';

// eslint-disable-next-line react/display-name
jest.mock('../Track', () => () => <div />);

describe('TrackList', () => {
  it('renders correctly', () => {
    const props = {
      tracks: [{
        path: 'test',
      }, {
        path: 'test2',
      }],
    };
    const component = shallow(<TrackList {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
