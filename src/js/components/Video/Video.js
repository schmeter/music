import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Image from '../Image';
import Link from '../Link';
import Icon from '../Icon';
import { getApiUrl } from '../../services/api';

const Video = ({
    video,
    isPlaying,
    togglePlay,
}) => {
    const [loaded, setLoaded] = useState(false);

    const handleClickLink = useCallback(() => {
        isPlaying && togglePlay();
    }, [
        isPlaying,
        togglePlay,
    ]);

    const handleLoad = useCallback(() => {
        setLoaded(true);
    }, []);

    return (
        <div className="video">
            <Link
                to={getApiUrl('youtubeLink', {
                    videoId: video.id,
                })}
                onClick={handleClickLink}
            >
                <Image
                    src={getApiUrl('youtubeImage', {
                        videoId: video.id,
                    })}
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
