import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../../Icon';

class IconPlay extends React.Component {
    render() {
        const { isPlaying } = this.props;

        return <Icon id={isPlaying ? 'pause' : 'play'} />;
    }
}

IconPlay.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
};

export default IconPlay;
