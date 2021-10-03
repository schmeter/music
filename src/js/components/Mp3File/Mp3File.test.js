import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Mp3File from './Mp3File';
import Link from '../Link';

describe('Mp3File', () => {
  const mockedEvent = {
    preventDefault: jest.fn(),
  };
  const setActiveIndex = jest.fn();
  const togglePlay = jest.fn();
  const tracks = [{
    path: 'test1',
    tag: {
      title: 'test1',
    },
  }, {
    path: 'test2',
    tag: {
      title: 'test2',
    },
  }];

  it('renders correctly and uses togglePlay on click', () => {
    const props = {
      tracks,
      file: tracks[0],
      activeIndex: 0,
      setActiveIndex,
      togglePlay,
    };
    const component = mount(
      <BrowserRouter>
        <Mp3File {...props} />
      </BrowserRouter>,
    );

    expect(toJson(component)).toMatchSnapshot();

    component.find(Link).simulate('click', mockedEvent);

    expect(togglePlay).toHaveBeenCalled();
  });

  it('renders correctly and uses setActiveIndex on click', () => {
    const props = {
      tracks,
      file: tracks[1],
      activeIndex: 0,
      setActiveIndex,
      togglePlay,
    };
    const component = mount(
      <BrowserRouter>
        <Mp3File {...props} />
      </BrowserRouter>,
    );

    expect(toJson(component)).toMatchSnapshot();

    component.find(Link).simulate('click', mockedEvent);

    expect(setActiveIndex).toHaveBeenCalled();
  });
});
