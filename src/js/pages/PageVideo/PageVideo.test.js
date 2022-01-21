import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import PageVideo from './PageVideo';

// eslint-disable-next-line react/display-name
jest.mock('../Page', () => () => <div />);
// eslint-disable-next-line react/display-name
jest.mock('./Video', () => () => <div />);

describe('PageVideo', () => {
  it('renders correctly', () => {
    const props = {
      videos: [{
        id: 'test',
      }, {
        hidden: true,
        id: 'test2',
      }],
    };
    const component = shallow(<PageVideo {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
