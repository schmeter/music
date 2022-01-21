import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Image from '../../../components/Image';
import Link from '../../../components/Link';
import Icon from '../../../components/Icon';
import { getApiUrl } from '../../../helpers/api';

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
        to={getApiUrl('youtubeVideo', {
          videoId: video.id,
        })}
        onClick={handleClickLink}
      >
        <div className="video-preview">
          <Image
            src={getApiUrl('youtubePreviewImage', {
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
        </div>
        <div className="video-details">
          <h3 className="video-title">
            {video.title}
          </h3>
          <h3 className="artist-title">
            {video.artist.title}
          </h3>
        </div>
      </Link>

    </div>
  );
};

Video.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.shape({
      title: PropTypes.string,
    }),
  }).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  togglePlay: PropTypes.func.isRequired,
};

export default Video;
