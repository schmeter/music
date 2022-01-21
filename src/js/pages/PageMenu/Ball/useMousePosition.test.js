import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import useMousePosition from './useMousePosition';

describe('useMousePosition', () => {
  const TestComponent = ({ customHook }) => {
    customHook();
    return null;
  };

  const mountTestComponent = customHook => {
    return mount(<TestComponent customHook={customHook} />);
  };

  const map = {};

  document.addEventListener = jest.fn((event, cb) => {
    map[event] = cb;
  });

  test('should deliver correct values', () => {
    let mousePosition;
    const component = mountTestComponent(() => {
      mousePosition = useMousePosition();
    });

    expect(mousePosition).toEqual({ x: null, y: null, visible: false });

    act(() => {
      map.mouseenter();
      map.mousemove({ clientX: 1, clientY: 1 });
      map.mouseleave();
      component.update();
    });

    component.unmount();
  });
});
