import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { config } from '../../helpers/aggregate';

const Image = ({ className, src, alt, onLoad }) => {
  const image = useRef();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = useCallback(() => {
    setLoaded(true);
    onLoad?.();
  }, [
    onLoad,
  ]);

  const handleError = useCallback(() => {
    setError(true);
  }, []);

  useEffect(() => {
    if (error) {
      image.current.src = config.app.fallbackImage;
    }
  }, [
    error,
  ]);

  return (
    <img
      className={classNames(
        'image',
        className,
        !loaded && 'invisible',
      )}
      src={src}
      alt={alt}
      ref={image}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  onLoad: PropTypes.func,
};

export default Image;
