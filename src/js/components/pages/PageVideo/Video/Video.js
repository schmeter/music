import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Image from '../../../Image';
import Link from '../../../Link';
import Icon from '../../../Icon';

const Video = ({
    video,
    isPlaying,
    togglePlay,
}) => {
    const [loaded, setLoaded] = useState(false);
    const handleClickLink = () => {
        isPlaying && togglePlay();
    };
    const handleLoad = () => {
        setLoaded(true);
    };

    return (
        <div className="video">
            <Link
                to={`//www.youtube.com/watch?v=${video.id}`}
                onClick={handleClickLink}
            >
                <Image
                    src={`//img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.artist.title}
                    onLoad={handleLoad}
                />
                <div
                    className={classNames(
                        'icon',
                        !loaded && 'hidden',
                    )}
                >
                    <Icon id="youtube-play" />
                </div>
            </Link>
        </div>
    );
};

Video.propTypes = {
    video: PropTypes.shape({
        id: PropTypes.string.isRequired,
        artist: PropTypes.shape({
            title: PropTypes.string,
        }),
    }).isRequired,
    isPlaying: PropTypes.bool.isRequired,
    togglePlay: PropTypes.func.isRequired,
};

export default Video;
