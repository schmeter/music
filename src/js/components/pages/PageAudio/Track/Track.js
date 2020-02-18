import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Mp3File from '../../../Mp3File';
import IconPlay from '../IconPlay';

const Track = ({ file, className, activeTrack }) => {
    const playing = activeTrack ? file.path === activeTrack.path : false;

    return (
        <div
            className={classNames(
                className,
                'track',
                { 'track-playing': playing },
            )}
        >
            <span className="table-cell index">
                {playing ? <IconPlay /> : file.tag.track}
            </span>
            <span className="table-cell">
                <Mp3File file={file} />
            </span>
        </div>
    );
};

Track.propTypes = {
    className: PropTypes.string,
    file: PropTypes.object.isRequired,
    activeTrack: PropTypes.object,
};

export default Track;
