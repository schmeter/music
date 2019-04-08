import React from 'react';
import PropTypes from 'prop-types';

import Track from '../Track';

class TrackList extends React.Component {
    render() {
        const { trackList } = this.props;

        return (
            <div className="table tracks">
                {trackList.map((track) => (
                    <Track
                        key={track.path}
                        className="table-row"
                        file={track}
                    />
                ))}
            </div>
        );
    }
}

TrackList.propTypes = {
    trackList: PropTypes.array.isRequired
};

export default TrackList;
