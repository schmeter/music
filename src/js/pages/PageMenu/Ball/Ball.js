import React from 'react';

import useMousePosition from './useMousePosition';

const Ball = () => {
  const { x, y, visible } = useMousePosition();

  const top = 100 * y / window.innerHeight;
  const left = 100 * x / window.innerWidth;

  return (
    <div className="ball">
      <div className="head" style={{
        opacity: visible ? 1 : 0,
        top: `${100 - top}%`,
        left: `${100 - left}%`,
      }}>
        <div className="eye left">
          <div className="pupils" style={{
            top: `${top}%`,
            left: `${left}%`,
          }}/>
        </div>
        <div className="eye right">
          <div className="pupils" style={{
            top: `${top}%`,
            left: `${left}%`,
          }}/>
        </div>
        <div className="jaws">
          <div className="tooth" />
          <div className="tooth" />
          <div className="tooth" />
          <div className="tooth" />
        </div>
        <div className="nostril left" />
        <div className="nostril right" />
      </div>
    </div>
  );
};

export default Ball;
