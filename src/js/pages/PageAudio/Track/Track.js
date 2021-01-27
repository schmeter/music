import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Mp3File from '../../../components/Mp3File';
import IconPlay from '../IconPlay';

const Track = ({
    track,
    className,
    activeTrack,
}) => {
    const playing = track.path === activeTrack?.path;

    return (
        <div
            className={classNames(
                className,
                'track',
                playing && 'track-playing',
            )}
        >
            <span className="table-cell index">
                {playing ? <IconPlay /> : track.tag.track}
            </span>
            <span className="table-cell">
                <Mp3File file={track} />
            </span>
        </div>
    );
};

Track.propTypes = {
    track: PropTypes.object.isRequired,
    className: PropTypes.string,
    activeTrack: PropTypes.object,
};

export default Track;
