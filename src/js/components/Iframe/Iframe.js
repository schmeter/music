import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

const Iframe = ({
  src,
  className,
  onLoad,
}) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setLoaded(true);
    onLoad?.();
  }, [
    onLoad,
  ]);

  return (
    <div
      className={classNames(
        'iframe-wrapper',
        className,
      )}>
      <div className="ratio-setter"></div>
      <div className="spinner">
        <Icon id="cog" spin />
      </div>
      <iframe
        className={classNames(
          'iframe',
          !loaded && 'invisible',
        )}
        onLoad={handleLoad}
        src={src}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

Iframe.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  onLoad: PropTypes.func,
};

export default Iframe;
