import React from 'react';
import PropTypes from 'prop-types';

import Track from '../Track';

const TrackList = ({
  tracks,
}) => (
  <div className="table tracks">
    {tracks.map(track => (
      <Track
        key={track.path}
        className="table-row"
        track={track}
      />
    ))}
  </div>
);

TrackList.propTypes = {
  tracks: PropTypes.array.isRequired,
};

export default TrackList;
