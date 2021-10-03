import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Info from './Info';
import Link from '../../Link';

jest.mock('../../../util/screen', () => ({
  scrollTop: jest.fn(),
}));
// eslint-disable-next-line react/display-name
jest.mock('../../Link', () => () => <div />);

describe('Info', () => {
  const mockedEvent = {
    preventDefault: jest.fn(),
  };

  it('renders correctly', () => {
    const activeTrack = {
      path: 'test',
      tag: {
        title: 'test',
      },
      artist: {
        id: 'test',
      },
      album: {
        id: 'test',
        title: 'test',
        imgPath: 'test',
      },
    };
    const lyrics = 'test';
    const props = {
      closeLayers: jest.fn(),
    };
    const component = shallow(<Info {...props} />);

    expect(toJson(component)).toMatchSnapshot();

    component.setProps({
      ...props,
      activeTrack,
    });
    component.update();

    component.setProps({
      ...props,
      activeTrack: {
        ...activeTrack,
        tag: {
          title: 'test',
          artist: 'test',
          album: 'test',
        },
        lyrics,
      },
    });
    component.update();
    component.find('.cover').find(Link).simulate('click', mockedEvent);

    expect(toJson(component)).toMatchSnapshot();
    expect(props.closeLayers).toHaveBeenCalled();
  });

  it('renders correctly after update', () => {
    const activeTrack = {
      path: 'test',
      tag: {
        title: 'test',
      },
      artist: {
        id: 'test',
      },
      album: {
        id: 'test',
        title: 'test',
        imgPath: 'test',
      },
    };
    const props = {
      closeLayers: jest.fn(),
    };
    const component = mount(<Info {...props} />);

    expect(toJson(component)).toMatchSnapshot();

    component.setProps({
      ...props,
      activeTrack,
    });
    component.update();

    expect(toJson(component)).toMatchSnapshot();
  });
});
