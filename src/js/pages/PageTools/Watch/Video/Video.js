import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import Link from '../../../../components/Link';
import i18n from '../../../../services/i18n';
import storage from '../../../../services/storage';

const getVideoCurrentTimes = () => storage.get('video:currentTimes') || [];
const getVideoCurrentTimesFiltered = itemId => getVideoCurrentTimes()
  .filter(item => item.id !== itemId);
const getVideoCurrentTime = itemId => getVideoCurrentTimes()
  .find(item => item.id === itemId)?.currentTime || 0;
const setVideoCurrentTimes = items => storage.set('video:currentTimes', items);

const Video = ({
  video,
  videoRefs,
}) => {
  const [showVideo, setShowVideo] = useState(video.preview);

  const playVideoFullscreen = currentVideo => {
    videoRefs.current.forEach(item => {
      if (item !== currentVideo) {
        item?.pause?.();
      }
    });
    currentVideo.requestFullscreen?.();
  };

  return (
    <div className="video">
      {video.preview || showVideo ? (
        <video
          controls
          src={video.url_video}
          ref={element => {
            videoRefs.current[video.index] = element;
          }}
          onPlay={e => {
            playVideoFullscreen(e.target);
          }}
          onPause={e => {
            // console.log(getVideoCurrentTimes());
          }}
          onEnded={e => {
            setVideoCurrentTimes([
              ...getVideoCurrentTimesFiltered(video.id),
            ]);
          }}
          onLoadedMetadata={e => {
            if (video.preview) {
              e.target.currentTime += 1;
            } else {
              e.target.currentTime = getVideoCurrentTime(video.id);
              e.target.play();
            }
          }}
          onTimeUpdate={e => {
            setVideoCurrentTimes([
              {
                ...video,
                currentTime: e.currentTarget.currentTime,
              },
              ...getVideoCurrentTimesFiltered(video.id),
            ]);
          }}
        />
      ) : (
        <div className="size-container">
          <Link
            className="description"
            to={video.url_video}
            onClick={e => {
              e.preventDefault();
              setShowVideo(true);
            }}
          >
            {video.description}
          </Link>
        </div>
      )}
      <div className="video-details">
        <h3 className="date">
          <Link to={video.url_video}>
            {format(new Date(video.timestamp * 1000), i18n('date_format'))}
            &nbsp;
            {video.topic}
            &nbsp;
            ({`${Math.floor(video.duration / 60) % 60} min`})
          </Link>
        </h3>
        <h3 className="title">
          <Link to={video.url_video}>
            {video.title}
          </Link>
        </h3>
      </div>
    </div>
  );
};

Video.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    url_video: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    preview: PropTypes.bool,
  }),
  videoRefs: PropTypes.shape({
    current: PropTypes.array,
  }),
};

export default Video;
