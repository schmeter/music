import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [mouse, setMouse] = useState({ x: null, y: null, visible: false });

  useEffect(() => {
    const updateMousePosition = e => setMouse({
      x: e.clientX,
      y: e.clientY,
      visible: e.clientX > -1 && e.clientY > -1,
    });

    const setMouseVisible = () => setMouse({
      ...mouse,
      visible: true,
    });

    const setMouseInvisible = () => setMouse({
      ...mouse,
      visible: false,
    });

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', setMouseInvisible);
    document.addEventListener('mouseenter', setMouseVisible);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', setMouseInvisible);
      document.removeEventListener('mouseenter', setMouseVisible);
    };
  }, [
    mouse,
  ]);

  return mouse;
};

export default useMousePosition;
