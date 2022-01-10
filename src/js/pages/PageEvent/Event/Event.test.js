import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Event from './Event';
import { getEventId } from '../../../services/event';

let mockUrlParams;

jest.mock('react-router-dom', () => ({
  useParams: () => (mockUrlParams),
}));
window.HTMLElement.prototype.scrollIntoView = function() {};
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useRef: () => ({
    current: {
      eventContainer: {
        scrollIntoView: () => {},
      },

    },
  }),
}));

describe('Event', () => {
  const props = {
    event: {
      title: 'test',
      date: '2020-02-02',
      artist: {
        title: 'test',
      },
    },
  };

  it('renders correctly with image', () => {
    mockUrlParams = {};

    const component = mount(<Event {...{ ...props, event: { ...props.event, imgPath: 'test' } } } />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders correctly without url params', () => {
    mockUrlParams = {};

    const component = mount(<Event {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders correctly with correct url params', () => {
    mockUrlParams = {
      eventId: getEventId(props.event),
    };

    const component = mount(<Event {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders correctly with wrong url params', () => {
    mockUrlParams = {
      eventId: 'test',
    };

    const component = mount(<Event {...props} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
