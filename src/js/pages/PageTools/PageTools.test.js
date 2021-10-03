import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import PageTools from './PageTools';

let mockUrlParams;

jest.mock('react-router-dom', () => ({
  useParams: () => (mockUrlParams),
}));
// eslint-disable-next-line react/display-name
jest.mock('../../components/Page', () => () => <div />);
// eslint-disable-next-line react/display-name
jest.mock('./Clock', () => () => <div />);
// eslint-disable-next-line react/display-name
jest.mock('./Learn', () => () => <div />);
// eslint-disable-next-line react/display-name
jest.mock('./Watch', () => () => <div />);
jest.mock('../', () => ({
  // eslint-disable-next-line react/display-name
  Page404: () => <div />,
}));

describe('PageTools', () => {
  const props = {
    closeLayers: jest.fn(),
  };

  it('renders correctly without url params', () => {
    mockUrlParams = {};

    const component = shallow(<PageTools {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders correctly with correct url params', () => {
    mockUrlParams = {
      toolId: 'clock',
    };

    const component = shallow(<PageTools {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders correctly with wrong url params', () => {
    mockUrlParams = {
      toolId: 'test',
    };

    const component = shallow(<PageTools {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
