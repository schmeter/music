import React from 'react';
import PropTypes from 'prop-types';

import Page from '../Page';
import Video from './Video';

const PageVideo = ({
  videos,
}) => (
  <Page id="video">
    {videos.map(video => !video.hidden && (
      <Video
        key={video.id}
        video={video}
      />
    ))}
  </Page>
);

PageVideo.propTypes = {
  videos: PropTypes.array.isRequired,
};

export default PageVideo;
