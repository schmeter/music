import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../../components/Icon';

const IconPlay = ({
  isPlaying,
}) => (
  <Icon id={isPlaying ? 'pause' : 'play'} />
);

IconPlay.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
};

export default IconPlay;
