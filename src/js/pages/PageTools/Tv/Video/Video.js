import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import Link from '../../../../components/Link';
import Icon from '../../../../components/Icon';
import i18n from '../../../../services/i18n';
import storage from '../../../../services/storage';

const getVideoCurrentTimes = () => storage.get('video:currentTimes') || [];
const getVideoCurrentTimesFiltered = itemId => getVideoCurrentTimes()
  .filter(item => item.id !== itemId);
const getVideoCurrentTime = itemId => getVideoCurrentTimes()
  .find(item => item.id === itemId)?.currentTime || 0;
const setVideoCurrentTimes = items => storage.set('video:currentTimes', items);

const onFullscreenChange = e => {
  // document.fullscreenElement will point to the element that
  // is in fullscreen mode if there is one. If there isn't one,
  // the value of the property is null.
  if (document.fullscreenElement) {
    // console.log(document.fullscreenElement);
  } else {
    e.target.pause();
  }
};

const Video = ({
  video,
  videoRefs,
}) => {
  const [showVideo, setShowVideo] = useState(video.preview);

  useEffect(() => {
    document.addEventListener('fullscreenchange', onFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange);
    };
  });

  const playVideoFullscreen = currentVideo => {
    videoRefs.current.forEach(item => {
      if (item !== currentVideo) {
        item?.pause?.();
      }
    });
    currentVideo.requestFullscreen?.();
  };

  const videoUrl = (video.url_video_hd || video.url_video_low)
    // fix wrongly double encoded ß
    .replace('%C3%83%C5%B8', '%c3%9f');

  return (
    <div className="video">
      {video.preview || showVideo ? (
        <video
          controls
          src={videoUrl}
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
          <div className="icon">
            <Icon id="play-circle-o" />
          </div>
          <Link
            className="description"
            to={videoUrl}
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
          {format(new Date(video.timestamp * 1000), i18n('date_format'))}
          &nbsp;
          ({`${Math.floor(video.duration / 60) % 60} min`})
        </h3>
        <h3 className="title">
          {video.title}
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
    url_video_hd: PropTypes.string.isRequired,
    url_video_low: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    preview: PropTypes.bool,
  }),
  videoRefs: PropTypes.shape({
    current: PropTypes.array,
  }),
};

export default Video;
